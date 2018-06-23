import { shallow } from 'enzyme';
import React from 'react';
import AboutPage from './AboutPage';

describe('pages -> AboutPage component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper.instance()).toBeNull();
  });
});
