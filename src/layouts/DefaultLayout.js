import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import { Container, Icon, Segment, Sidebar } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.css';
import '../styles/site.css';
import '../styles/responsive.css';
import 'prismjs/themes/prism-okaidia.css';

export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'About', path: '#about', exact: true, icon: 'info circle' },
  { name: 'Resume', path: '#resume', exact: false, icon: 'newspaper' },
  { name: 'Portfolio', path: '#portfolio', exact: false, icon: 'newspaper' },
  { name: 'Contact', path: '#contact', exact: false, icon: 'newspaper' },
];

interface DefaultLayoutProps {
  children: any;
}

export default class DefaultLayout extends PureComponent<DefaultLayoutProps> {
  render () {
    const { pathname } = this.props.children.props.location;
    const isHome = pathname === '/home';

    return (
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu pathname={pathname} items={menuItems} visible={false}/>
        <Sidebar.Pusher style={{ minHeight: '100vh' }}>
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
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export const DefaultLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <DefaultLayout>
        <Component {...matchProps} />
      </DefaultLayout>
    )} />
  )
};
