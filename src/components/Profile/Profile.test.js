import { shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { Profile } from './Profile';

describe('component -> Profile', () => {
  let id = 'profile';

  it('should have id defined', () => {
    const wrapper = shallow(<Profile id={id} />);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });

  it('should have "All" as active in menu', () => {
    const wrapper = shallow(<Profile id={id} />);
    expect(wrapper.find({ name: 'All' }).prop('active')).toBeTruthy();
  });

  it('should change the active menu item when clicked', () => {
    const getActiveProperty = (name) => wrapper.find({ name }).prop('active');
    const expected = [false, false, false];
    const wrapper = shallow(<Profile id={id} />);

    wrapper.find({ name: 'All' }).simulate('click');
    expect(getActiveProperty('All')).toBeTruthy();
    expect(['Sites', 'Mockups', 'Wireframes'].map(getActiveProperty)).toEqual(expected);

    wrapper.find({ name: 'Sites' }).simulate('click');
    expect(getActiveProperty('Sites')).toBeTruthy();
    expect(['All', 'Mockups', 'Wireframes'].map(getActiveProperty)).toEqual(expected);

    wrapper.find({ name: 'Mockups' }).simulate('click');
    expect(getActiveProperty('Mockups')).toBeTruthy();
    expect(['All', 'Sites', 'Wireframes'].map(getActiveProperty)).toEqual(expected);

    wrapper.find({ name: 'Wireframes' }).simulate('click');
    expect(getActiveProperty('Wireframes')).toBeTruthy();
    expect(['All', 'Sites', 'Mockups'].map(getActiveProperty)).toEqual(expected);
  });
});
