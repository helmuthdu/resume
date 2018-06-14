import { shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { About } from './About';

describe('About component', () => {
  let id = 'about';

  it('should have id defined', () => {
    const wrapper = shallow(<About id={id}/>);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });
});
