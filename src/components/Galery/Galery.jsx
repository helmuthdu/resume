import { css, StyleSheet } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LightBox from 'react-images';

export class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      currentImage: 0
    };
  }

  handleOpen = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      currentImage: 0,
      open: false
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  gotoImage = index => {
    this.setState({
      currentImage: index
    });
  };

  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  };

  renderGallery = () => {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <a
          href={obj.src}
          className={css(classes.thumbnail, classes[obj.orientation])}
          key={i}
          onClick={e => this.handleOpen(i, e)}>
          <img
            src={obj.thumbnail}
            className={css(classes.source)}
            alt=""
            style={{ width: 'auto', height: 'auto', maxHeight: 165 }}
          />
        </a>
      );
    });

    return <div className={css(classes.gallery)}>{gallery}</div>;
  };

  render() {
    return (
      <div className="section">
        {this.props.heading && <h2>{this.props.heading}</h2>}
        {this.props.subheading && <p>{this.props.subheading}</p>}
        {this.renderGallery()}
        <LightBox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.open}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.handleClose}
          preventScroll={this.props.preventScroll}
          showThumbnails={this.props.showThumbnails}
          spinner={this.props.spinner}
          spinnerColor={this.props.spinnerColor}
          spinnerSize={this.props.spinnerSize}
          theme={this.props.theme}
        />
      </div>
    );
  }
}

const gutter = {
  small: 2,
  large: 4
};

const classes = StyleSheet.create({
  gallery: {
    marginRight: -gutter.small,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@media (min-width: 500px)': {
      marginRight: -gutter.large
    }
  },

  // anchor
  thumbnail: {
    boxSizing: 'border-box',
    display: 'block',
    float: 'left',
    lineHeight: 0,
    paddingRight: gutter.small,
    paddingBottom: gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      paddingRight: gutter.large,
      paddingBottom: gutter.large
    }
  },

  // orientation
  landscape: {
    width: '30%'
  },
  square: {
    paddingBottom: 0,
    width: '40%',

    '@media (min-width: 500px)': {
      paddingBottom: 0
    }
  },

  // actual <img />
  source: {
    border: 0,
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    width: 'auto'
  }
});

Gallery.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array.isRequired,
  preventScroll: PropTypes.bool,
  showThumbnails: PropTypes.bool,
  spinner: PropTypes.bool,
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.string,
  subheading: PropTypes.string,
  theme: PropTypes.string
};

export default Gallery;
