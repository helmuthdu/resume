import { render } from 'enzyme';
import 'jest';
import React from 'react';
import { withRouter } from 'react-router';
import { SidebarMenu } from './SidebarMenu';

const items = [
  { name: 'Home', path: '/', exact: true },
  { name: 'About', path: '/about/', exact: true },
  { name: 'Blog', path: '/blog/', exact: false }
];

describe('SidebarMenu component', () => {
  it('should render correctly', () => {
    let visible = true;
    const toggleSidebar = jest.fn();
    const wrapper = render(
      withRouter(<SidebarMenu pathname="/" items={items} visible={visible} toggleSidebar={toggleSidebar} />)
    );
    expect(wrapper).toMatchSnapshot();
  });
});
