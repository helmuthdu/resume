import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>About</Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>This project is created by @helmuthdu.</p>
        <p>
          For any question, I'm on{' '}
          <a href="mailto:helmuthdu@gmail.com" target="blank">
            helmuthdu@gmail.com
          </a>
        </p>
        <p>
          For any issues, any PR are welcoming
          <a href="https://github.com/helmuthdu/resume" target="blank">
            {' '}
            on this repository
          </a>
        </p>
      </Segment>
    </Container>
  );
};

export default AboutPage;
