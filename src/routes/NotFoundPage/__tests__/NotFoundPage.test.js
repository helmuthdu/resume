import { shallow } from 'enzyme';
import React from 'react';
import NotFoundPage from '../NotFoundPage';

describe('pages -> NotFoundPage component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.instance()).toBeNull();
  });
});
