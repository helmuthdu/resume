import { shallow } from 'enzyme/build/index';
import React from 'react';
import Gallery from './Galery';

describe('Gallery component', () => {
  const props = {
    images: []
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<Gallery {...props}/>);
    expect(wrapper.instance() instanceof React.Component).toBeTruthy();
  });
});
