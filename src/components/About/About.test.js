import { configure, shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { About } from './About';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('About component', () => {
  let id = 'about';

  it('should have id defined', () => {
    const wrapper = shallow(<About id={id}/>);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });
});
