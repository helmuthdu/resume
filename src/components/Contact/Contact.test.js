import { configure, shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { Contact } from './Contact';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('About component', () => {
  let id = 'contact';

  it('should have id defined', () => {
    const wrapper = shallow(<Contact id={id}/>);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });
});
