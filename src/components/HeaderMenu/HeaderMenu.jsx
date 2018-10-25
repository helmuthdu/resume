// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { Container, Menu } from 'semantic-ui-react';
import { toggleSidebar } from '../../store/modules/ui';
import { MenuProps } from '../Menu/Menu';

interface HeaderMenuProps extends MenuProps {
  fixed?: boolean;
  inverted?: boolean;
  link: any;
  pathname: string;
  pointing?: boolean;
  secondary?: boolean;
  toggleSidebar: Dispatch<any>;
  visible?: boolean;
}

export const HeaderMenu = ({
  fixed,
  inverted,
  items,
  pathname,
  pointing,
  secondary,
  toggleSidebar,
  visible
}: HeaderMenuProps) => (
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

export default connect(
  null,
  mapDispatchToProps
)(HeaderMenu);
