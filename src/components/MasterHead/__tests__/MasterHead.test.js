import { shallow } from 'enzyme';
import React from 'react';
import { MasterHead } from '../MasterHead';

describe('component -> MasterHead', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<MasterHead pathname="/" />);
    expect(wrapper).toMatchSnapshot();
  });
});
