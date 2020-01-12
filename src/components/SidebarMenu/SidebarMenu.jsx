import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { toggleSidebar } from '../../store/modules/ui';

export const SidebarMenu = ({ items, pathname, visible, toggleSidebar }) => {
  const isActive = item => (item.exact ? pathname === item.path : pathname.startsWith(item.path));
  const activeItem = items.find(item => isActive(item)) || {};
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

const mapStateToProps = state => ({
  visible: state.ui.isSidebarVisible
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      toggleSidebar
    },
    dispatch
  );

SidebarMenu.propTypes = {
  items: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  visible: PropTypes.bool
};

SidebarMenu.defaultProps = {
  items: [],
  visible: false
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
