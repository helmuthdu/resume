// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { MenuItem, MenuProps } from '../Menu';
import { UIStoreState } from '../../store/modules/ui';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

interface SidebarMenuProps extends MenuProps {
  visible?: boolean;
  dispatch?: Dispatch<any>;
  Link: any;
}

export const SidebarMenu = ({ items, pathname, visible }: SidebarMenuProps) => {
  const isActive = (item: MenuItem) => (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
  const activeItem = items.find((item: MenuItem) => isActive(item)) || {};
  return (
    <Sidebar as={Menu} animation="slide along" width="thin" visible={visible} icon="labeled" vertical inverted={activeItem.inverted}>
      {items.map((item) => {
        const active = isActive(item);
        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <Icon name={item.icon}/>
            {item.name}
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
};

const mapStateToProps = (state: UIStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect(mapStateToProps)(SidebarMenu);
