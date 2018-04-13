// @flow
import React, { Component, Fragment } from 'react';
import { Button, Container, Divider, Header, Segment } from 'semantic-ui-react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Profile from '../../components/Profile/Profile';
import Resume from '../../components/Resume/Resume';
import { menuItems } from '../../layouts/DefaultLayout';

import '../../pages/AppPage/AppPage.css';

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const curriculumDocFile = require('../../assets/docs/helmuth_saatkamp_resume.docx');

export default class AppPage extends Component<IndexPageProps> {

  render () {
    return (
      <Fragment>
        {/* MASTER HEAD */}
        <Segment ref={this.contextRef} vertical inverted textAlign="center" className="masthead">
          <HeaderMenu pathname={this.props.location.pathname} items={menuItems} pointing secondary inverted visible/>
          <Container text>
            <Header inverted as="h1">Helmuth Saatkamp</Header>
            <Divider/>
            <Header inverted as="h2">Web Developer</Header>
            <Button primary inverted size="large" as="a" href={curriculumDocFile}>Download My CV</Button>
          </Container>
        </Segment>

        {/* ABOUT */}
        <About id="about"/>

        {/* RESUME */}
        <Resume id="resume"/>

        {/* PORTFOLIO */}
        <Profile id="portfolio"/>

        {/* CONTACT */}
        <Contact id="contact"/>
      </Fragment>
    );
  }
}
