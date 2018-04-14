import { configure, shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { MasterHead } from './MasterHead';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('MasterHead component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<MasterHead pathname="/"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
