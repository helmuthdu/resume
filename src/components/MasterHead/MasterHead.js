// @flow
import React from 'react';
import { Button, Container, Divider, Header, Segment } from 'semantic-ui-react';
import { menuItems } from '../../layouts/DefaultLayout';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

export const MasterHead = ({ pathname }: any) => (
  <Segment vertical inverted textAlign="center" className="masthead">
    <HeaderMenu pathname={pathname} items={menuItems} pointing secondary inverted visible />
    <Container text>
      <Header inverted as="h1">
        Helmuth Saatkamp
      </Header>
      <Divider hidden />
      <Header inverted as="h2">
        Web Developer
      </Header>
      <Button
        primary
        inverted
        size="large"
        as="a"
        href={`${process.env.PUBLIC_URL || ''}/docs/helmuth_saatkamp_resume_en.pdf`}>
        Download My CV
      </Button>
    </Container>
  </Segment>
);

export default MasterHead;
