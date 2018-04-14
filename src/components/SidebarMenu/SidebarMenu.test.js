import { configure, render } from 'enzyme';
import 'jest';
import React from 'react';
import { withRouter } from 'react-router';
import { SidebarMenu } from './SidebarMenu';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

const items = [
  { name: 'Home', path: '/', exact: true },
  { name: 'About', path: '/about/', exact: true },
  { name: 'Blog', path: '/blog/', exact: false }
];

describe('SidebarMenu component', () => {
  it('should render correctly', () => {

    let visible = true;
    const toggleSidebar = () => visible = !visible;
    const wrapper = render(withRouter(<SidebarMenu pathname="/" items={items} visible={visible} toggleSidebar={toggleSidebar}/>));
    expect(wrapper).toMatchSnapshot();
  });
});
