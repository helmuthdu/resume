import { configure, shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { Profile } from './Profile';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('Profile component', () => {
  let id = 'profile';

  it('should have id defined', () => {
    const wrapper = shallow(<Profile id={id}/>);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });

  it('should have "All" as active in menu', () => {
    const wrapper = shallow(<Profile id={id}/>);
    expect(wrapper.find({ name: 'All' }).prop('active')).toBeTruthy();
  });

  it('should change the active menu to "Sites"', () => {
    const wrapper = shallow(<Profile id={id}/>);
    wrapper.find({ name: 'Sites' }).simulate('click');
    expect(wrapper.find({ name: 'All' }).prop('active')).toBeFalsy();
    expect(wrapper.find({ name: 'Sites' }).prop('active')).toBeTruthy();
  });
});
