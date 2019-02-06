import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import MasterHead from '../../components/MasterHead/MasterHead';
import Profile from '../../components/Profile/Profile';
import Resume from '../../components/Resume/Resume';

import './HomePage.css';

const HomePage = props => (
  <Fragment>
    <MasterHead pathname={props.location.pathname} />
    <About id="about" />
    <Resume id="resume" />
    <Profile id="portfolio" />
    <Contact id="contact" />
  </Fragment>
);

HomePage.propTypes = {
  location: PropTypes.any.isRequired
};

export default HomePage;
