import { shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { Resume } from './Resume';

describe('About component', () => {
  let id = 'about';

  it('should have id defined', () => {
    const wrapper = shallow(<Resume id={id}/>);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });
});
