import { shallow } from 'enzyme';
import React from 'react';
import { DefaultLayout, DefaultLayoutRoute } from '../DefaultLayout';

describe('layout -> DefaultLayout', () => {
  const children = {
    props: {
      location: '/'
    }
  };
  const state = { calculations: { pixelsPassed: 301, width: 749 } };

  it('renders without crashing', () => {
    const wrapper = shallow(<DefaultLayout children={children} />);
    expect(wrapper.instance() instanceof React.PureComponent).toBeTruthy();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
      <DefaultLayout
        children={{
          props: {
            location: 'about'
          }
        }}
      />
    );
    expect(wrapper.instance() instanceof React.PureComponent).toBeTruthy();
  });

  it('should change component state data', () => {
    children.props.location = 'About';
    const wrapper = shallow(<DefaultLayout children={children} />);
    wrapper.instance().handleUpdate(null, state);
    expect(wrapper.state().calculations.width).toBe(state.calculations.width);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<DefaultLayoutRoute />);
    expect(wrapper.instance()).toBeNull();
  });
});
