import { shallow } from 'enzyme/build/index';
import React from 'react';
import { ContactMap, GMaps } from '../ContactMap';

describe('component -> ContactMap', () => {
  const props = {
    isMarkerShown: true
  };

  it('renders ContactMap without crashing', () => {
    const wrapper = shallow(<ContactMap {...props} />);
    expect(wrapper.instance()).toBeNull();
  });

  it('renders GMaps without crashing', () => {
    const wrapper = shallow(<GMaps {...props} />);
    expect(wrapper.props().defaultZoom).toBe(12);
  });
});
