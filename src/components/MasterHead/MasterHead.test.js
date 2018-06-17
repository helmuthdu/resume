import { shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { MasterHead } from './MasterHead';

describe('MasterHead component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<MasterHead pathname="/" />);
    expect(wrapper).toMatchSnapshot();
  });
});
