import { shallow } from 'enzyme';
import React from 'react';
import { Contact } from '../Contact';

describe('component -> Contact', () => {
  let id = 'contact';

  it('should have id defined', () => {
    const wrapper = shallow(<Contact id={id} />);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });
});
