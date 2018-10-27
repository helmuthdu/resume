// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { toggleSidebar } from '../../store/modules/ui';
import { MenuItem, MenuProps } from '../Menu/Menu';

interface SidebarMenuProps extends MenuProps {
  items: MenuItem[];
  pathname: any;
  toggleSidebar: Dispatch;
  visible?: boolean;
}

export const SidebarMenu = ({ items, pathname, visible, toggleSidebar }: SidebarMenuProps) => {
  const isActive = (item: MenuItem) => (item.exact ? pathname === item.path : pathname.startsWith(item.path));
  const activeItem = items.find((item: MenuItem) => isActive(item)) || {};
  return (
    <Sidebar as={Menu} visible={visible} vertical animation="uncover" inverted={activeItem.inverted}>
      {items.map(item => {
        const active = isActive(item);
        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path} onClick={toggleSidebar}>
            <Icon name={item.icon} />
            {item.name}
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
};

const mapStateToProps = (state: any) => ({
  visible: state.ui.isSidebarVisible
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      toggleSidebar
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarMenu);
