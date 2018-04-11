import 'prismjs/themes/prism-okaidia.css';
import React, { Fragment, PureComponent } from 'react';
import { Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.css';
import { Container, Icon, Segment, Sidebar, Visibility } from 'semantic-ui-react';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import '../styles/responsive.css';
import '../styles/site.css';

export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'About', path: '#about', exact: false, icon: 'info circle' },
  { name: 'Resume', path: '#resume', exact: false, icon: 'newspaper' },
  { name: 'Portfolio', path: '#portfolio', exact: false, icon: 'newspaper' },
  { name: 'Contact', path: '#contact', exact: false, icon: 'newspaper' }
];

interface DefaultLayoutProps {
  children: any;
}

export default class DefaultLayout extends PureComponent<DefaultLayoutProps> {
  state = {
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false
    }
  };

  handleUpdate = (e, { calculations }) => {
    this.setState({ calculations });
    console.log(calculations);
  };

  render () {
    const { pathname } = this.props.children.props.location;
    const isHome = pathname === '/';

    return (
      <Fragment>
        <HeaderMenu pathname={pathname} items={menuItems.filter((item, index) => index > 0)} fixed="top" visible={this.state.calculations.pixelsPassed >= 300 && this.state.calculations.width > 748}/>
        <Sidebar.Pushable as={Segment}>
          <SidebarMenu pathname={pathname} items={menuItems}/>
          <Sidebar.Pusher style={{ minHeight: '100vh' }}>
            <Visibility onUpdate={this.handleUpdate}>
              {/* Header */}
              {isHome ? null : <HeaderMenu pathname={pathname} items={menuItems}/>}

              {/* Render children pages */}
              <div style={{ paddingBottom: 47 }}>
                {this.props.children}
              </div>

              {/* Footer */}
              <Segment inverted vertical style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <Container textAlign="center">
                  <p>Powered with <Icon name="heart"/> by React</p>
                </Container>
              </Segment>
            </Visibility>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Fragment>
    );
  }
}

export const DefaultLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <DefaultLayout>
        <Component {...matchProps} />
      </DefaultLayout>
    )}/>
  );
};
