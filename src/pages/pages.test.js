import { shallow } from 'enzyme';
import React from 'react';
import { App } from './index';

describe('pages -> App', () => {
  const history = {
    location: {
      path: '/'
    }
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<App history={history} />);
    expect(wrapper.instance()).toBeNull();
  });
});
