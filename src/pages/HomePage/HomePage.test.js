import { shallow } from 'enzyme/build/index';
import React from 'react';
import HomePage from './HomePage';

describe('HomePage component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<HomePage location="/" />);
    expect(wrapper.instance() instanceof React.Component).toBeTruthy();
  });
});
