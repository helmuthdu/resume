import { configure, shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { Resume } from './Resume';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('About component', () => {
  let id = 'about';

  it('should have id defined', () => {
    const wrapper = shallow(<Resume id={id}/>);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });
});
