// @flow
import { shallow } from 'enzyme/build/index';
import React from 'react';
import Gallery from './Galery';

describe('component -> Gallery', () => {
  const props = {
    images: [
      {
        src: 'test.png',
        thumbnail: 'test.png',
        thumbnailWidth: 288,
        thumbnailHeight: 180,
        tags: [{ value: 'wireframe', title: 'wireframe' }],
        caption: 'Test'
      },
      {
        src: 'test2.png',
        thumbnail: 'test2.png',
        thumbnailWidth: 288,
        thumbnailHeight: 180,
        tags: [{ value: 'mockup', title: 'mockup' }],
        caption: 'Test2'
      }
    ],
    showThumbnails: true,
    lightboxIsOpen: true
  };

  const event = {
    preventDefault: jest.fn()
  };

  const wrapper = shallow(<Gallery {...props} />);

  it('renders without crashing', () => {
    expect(wrapper.instance() instanceof React.Component).toBeTruthy();
  });

  it('should not renders if no image if found', () => {
    const emptyWrapper = shallow(<Gallery images={[]} />);
    expect(emptyWrapper.instance().props.images).toEqual([]);
  });

  it('should change current image index', () => {
    wrapper.instance().openLightbox(1, event);
    expect(wrapper.state().currentImage).toBe(1);
  });

  it('should close de lightbox', () => {
    wrapper.instance().closeLightbox();
    expect(wrapper.state().lightboxIsOpen).toBe(false);
  });

  it('should go to the next image', () => {
    wrapper.instance().gotoNext();
    expect(wrapper.state().currentImage).toBe(1);
  });

  it('should go to the previous image', () => {
    wrapper.instance().gotoPrevious();
    expect(wrapper.state().currentImage).toBe(0);
  });

  it('should set current image to a index', () => {
    wrapper.instance().gotoImage(2);
    expect(wrapper.state().currentImage).toBe(2);
  });

  it('should handle image click', () => {
    wrapper.instance().handleClickImage();
    expect(wrapper.state().currentImage).toBe(3);
  });
});
