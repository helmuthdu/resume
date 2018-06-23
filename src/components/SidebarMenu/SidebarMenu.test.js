import { render } from 'enzyme';
import 'jest';
import { shallow } from 'enzyme/build/index';
import React from 'react';
import { withRouter } from 'react-router';
import { SidebarMenu } from './SidebarMenu';

describe('component -> SidebarMenu', () => {
  const props = {
    pathname: '/',
    items: [
      { name: 'Home', path: '/', exact: true },
      { name: 'About', path: '/about/', exact: true },
      { name: 'Blog', path: '/blog/', exact: false }
    ],
    visible: true,
    toggleSidebar: jest.fn()
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<SidebarMenu {...props} />);
    expect(wrapper.instance()).toBeNull();
  });

  it('should render correctly', () => {
    const wrapper = render(
      withRouter(<SidebarMenu {...props} />)
    );
    expect(wrapper).toMatchSnapshot();
  });
});
