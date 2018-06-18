import { shallow } from 'enzyme/build/index';
import React from 'react';
import Gallery from './Galery';

describe('Gallery component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Gallery location="/" />);
    expect(wrapper.instance() instanceof React.Component).toBeTruthy();
  });
});
