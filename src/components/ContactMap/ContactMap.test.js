import { shallow } from 'enzyme/build/index';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import ContactMap from './ContactMap';

describe('ContactMap component', () => {
  const props = {
    store: configureMockStore()({})
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<ContactMap {...props}/>);
    expect(wrapper.instance() instanceof React.Component).toBeTruthy();
  });
});
