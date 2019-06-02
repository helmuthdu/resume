import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Container, Menu } from 'semantic-ui-react';
import { toggleSidebar } from '../../store/modules/ui';

export const HeaderMenu = ({ fixed, inverted, items, pathname, pointing, secondary, toggleSidebar, visible }) => (
  <Menu
    size="large"
    pointing={pointing}
    secondary={secondary}
    inverted={inverted}
    style={{ borderWidth: '0px' }}
    fixed={fixed}
    className={visible ? '' : 'hidden'}>
    <Container>
      <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={toggleSidebar} />
      {items.map(item => {
        const active = item.exact ? pathname === item.path : pathname.startsWith(item.path);
        return (
          <Menu.Item
            as={Link}
            className="mobile hidden"
            name={item.name}
            to={item.path}
            key={item.path}
            active={active}
          />
        );
      })}
    </Container>
  </Menu>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebar
    },
    dispatch
  );

HeaderMenu.propTypes = {
  fixed: PropTypes.string,
  inverted: PropTypes.bool,
  items: PropTypes.array,
  pathname: PropTypes.string.isRequired,
  pointing: PropTypes.bool,
  secondary: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
  visible: PropTypes.bool
};

HeaderMenu.defaultProps = {
  fixed: 'top',
  inverted: false,
  items: [],
  pointing: false,
  secondary: false,
  visible: false
};

export default connect(
  null,
  mapDispatchToProps
)(HeaderMenu);
