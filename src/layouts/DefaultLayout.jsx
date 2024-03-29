import PropTypes from 'prop-types';
import { Fragment, PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { Container, Icon, Segment, Sidebar, Visibility } from 'semantic-ui-react';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import 'semantic-ui-css/semantic.min.css';
import 'prismjs/themes/prism-okaidia.css';
import './DefaultLayout.css';
import './ResponsiveLayout.css';

export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'About', path: '#about', exact: false, icon: 'info circle' },
  { name: 'Resume', path: '#resume', exact: false, icon: 'newspaper' },
  { name: 'Portfolio', path: '#portfolio', exact: false, icon: 'newspaper' },
  { name: 'Contact', path: '#contact', exact: false, icon: 'newspaper' }
];

export class DefaultLayout extends PureComponent {
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
  };

  render() {
    const { pathname } = this.props.children.props.location;
    const isHome = pathname === '/';

    return (
      <Fragment>
        <HeaderMenu
          pathname={pathname}
          items={menuItems.filter((item, index) => index > 0)}
          fixed="top"
          visible={this.state.calculations.pixelsPassed >= 300 && this.state.calculations.width > 748}
        />
        <Sidebar.Pushable as={Segment}>
          <SidebarMenu pathname={pathname} items={menuItems} />
          <Sidebar.Pusher style={{ minHeight: '100vh' }}>
            <Visibility onUpdate={this.handleUpdate}>
              {/* Header */}
              {isHome ? null : <HeaderMenu pathname={pathname} items={menuItems} />}

              {/* Render children pages */}
              {this.props.children}

              {/* Footer */}
              <Segment inverted vertical style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                <Container textAlign="center">
                  <p>
                    Powered with <Icon name="heart" /> by React
                  </p>
                </Container>
              </Segment>
            </Visibility>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Fragment>
    );
  }
}

// eslint-disable-next-line
export const DefaultLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <DefaultLayout>
          <Component {...matchProps} />
        </DefaultLayout>
      )}
    />
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.any
};

export default DefaultLayoutRoute;
