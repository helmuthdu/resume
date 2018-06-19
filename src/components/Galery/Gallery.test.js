import { shallow } from 'enzyme/build/index';
import React from 'react';
import Gallery from './Galery';

describe('Gallery component', () => {
  const props = {
    images: [{
      src: 'test.png',
      thumbnail: 'test.png',
      thumbnailWidth: 288,
      thumbnailHeight: 180,
      tags: [{ value: 'wireframe', title: 'wireframe' }],
      caption: 'Test'
    }]
  };

  xit('renders without crashing', () => {
    const wrapper = shallow(<Gallery {...props}/>);
    expect(wrapper.instance() instanceof React.Component).toBeTruthy();
  });
});
