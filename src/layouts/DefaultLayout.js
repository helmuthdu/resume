import { Link } from 'react-router-dom';
import React from 'react';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import { Container, Icon, Segment, Sidebar } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.css';
import '../styles/site.css';
import '../styles/responsive.css';
import 'prismjs/themes/prism-okaidia.css';

export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'About', path: '/about/', exact: true, icon: 'info circle' },
  { name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper' }
];

interface DefaultLayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps> {
  render () {
    const { pathname } = this.props.location;
    const isHome = pathname === '/';

    return (
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu pathname={pathname} items={menuItems} visible={false}/>
        <Sidebar.Pusher style={{ minHeight: '100vh' }}>
          {/* Header */}
          {isHome ? null : <HeaderMenu pathname={pathname} items={menuItems}/>}

          {/* Render children pages */}
          <div style={{ paddingBottom: 60 }}>
            {this.props.children()}
          </div>

          {/* Footer */}
          <Segment inverted vertical style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <Container textAlign="center">
              <p>Powered with <Icon name="heart"/> by Gatsby 1.0</p>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
