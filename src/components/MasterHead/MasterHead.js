// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Divider, Header, Segment } from 'semantic-ui-react';
import { menuItems } from '../../layouts/DefaultLayout';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const curriculumDocFile = require('../../assets/docs/helmuth_saatkamp_resume_en.pdf');

export const MasterHead = ({ pathname }) =>
  <Segment vertical inverted textAlign="center" className="masthead">
    <HeaderMenu pathname={pathname} items={menuItems} pointing secondary inverted visible/>
    <Container text>
      <Header inverted as="h1">Helmuth Saatkamp</Header>
      <Divider hidden/>
      <Header inverted as="h2">Web Developer</Header>
      <Button primary inverted size="large" as="a" href={curriculumDocFile}>Download My CV</Button>
    </Container>
  </Segment>;

export default connect()(MasterHead);
