// @flow
import React, { Component, Fragment } from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import MasterHead from '../../components/MasterHead/MasterHead';
import Profile from '../../components/Profile/Profile';
import Resume from '../../components/Resume/Resume';

import '../../pages/AppPage/AppPage.css';

interface IndexPageProps {
  location: {
    pathname: string
  };
}

export default class AppPage extends Component<IndexPageProps> {
  render() {
    return (
      <Fragment>
        <MasterHead pathname={this.props.location.pathname} />
        <About id="about" />
        <Resume id="resume" />
        <Profile id="portfolio" />
        <Contact id="contact" />
      </Fragment>
    );
  }
}
