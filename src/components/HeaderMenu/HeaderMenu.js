// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Container, Menu } from 'semantic-ui-react';
import { toggleSidebar } from '../../store/modules/ui';
import { MenuProps } from '../Menu';

interface HeaderMenuProps extends MenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
  link: any;
  pathname: string;
}

export const HeaderMenu = ({ items, pathname, inverted, dispatch }: HeaderMenuProps) =>
  <Container>
    {console.log(items, pathname)}
    <Menu size="large" pointing secondary inverted={inverted} style={{borderWidth: '1px'}}>
      <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch(toggleSidebar())}/>
      {items.map((item) => {
        const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
        return <Menu.Item
          as={Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
        />;
      })}
    </Menu>
  </Container>;

export default connect()(HeaderMenu);
