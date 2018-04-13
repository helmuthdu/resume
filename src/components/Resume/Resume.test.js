import { configure, shallow } from 'enzyme';
import 'jest';
import React from 'react';
import { Resume } from './Resume';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('About component', () => {
  let id = 'about';

  it('should nothing active', () => {
    const wrapper = shallow(
      <Resume id={id}/>
    );
    expect(wrapper.find({ active: true }).length).toBe(1);
  });

  it('should have about as active (match exact)', () => {
    const wrapper = shallow(
      <Resume id={id}/>
    );
    expect(wrapper.find({ active: 'About' }).prop('active')).toBeTruthy();
  });

  it('should have blog as active (match not exact)', () => {
    const wrapper = shallow(
      <Resume id={id}/>
    );
    expect(wrapper.find({ name: 'Blog' }).prop('active')).toBeTruthy();
  });

  it('should have inverted style', () => {
    const wrapper = shallow(
      <Resume id={id}/>
    );
    expect(wrapper.find({ inverted: true }).length).toBe(1);
  });

  it('should dispatch the correct message on burger click', () => {
    const dispatchMock: any = jest.fn();
    const wrapper = shallow(
      <Resume id={id}/>
    );
    wrapper.find('.mobile .only').simulate('click');
    expect(dispatchMock.mock.calls.length).toBe(1);
  });
});
