// @flow
import React from 'react';
import { Divider, Grid, Header, List, Segment } from 'semantic-ui-react';

interface IAbout {
  id: string;
}

const EXPERIENCES = [
  {
    icon: 'fork',
    header: 'Web Development',
    description: 'Frontend and Backend Experience'
  },
  {
    icon: 'computer',
    header: 'Web Design',
    description: 'Progressive web pages, wireframes and mockups Experience'
  },
  {
    icon: 'world',
    header: 'GIS',
    description: 'Geographic Information Systems Experience'
  }
];

export const About = ({ id }: IAbout) => (
  <Segment id={id} vertical className="stripe" textAlign="center">
    <Header size="large">
      ABOUT ME
      <Header sub>
        <cite>
          A talented web developer located on our lovely planet<br />
        </cite>
      </Header>
    </Header>
    <Divider hidden section />
    <Grid columns="3" divided relaxed stackable textAlign="left" className="container">
      <Grid.Row>
        <Grid.Column>
          {/* WHO AM I? */}
          <Segment basic>
            <Header>Who am I?</Header>
            Full stack web developer with a passion for programming and expertise in designing, architecture and
            developing. Creative and innovative, I love learning new technologies. I greatly value working in a team,
            where one can learn faster and much more.
          </Segment>
        </Grid.Column>
        <Grid.Column>
          {/* PERSONAL INFO */}
          <Segment basic>
            <Header>Personal Info</Header>
            <List>
              <List.Item>
                <strong>Email</strong> helmuthdu@gmail.com
              </List.Item>
              <List.Item>
                <strong>Skype</strong> helmuthdu
              </List.Item>
              <List.Item>
                <strong>LinkedIn</strong> <a href="https://www.linkedin.com/in/helmuthdu">Helmuth Saatkamp</a>
              </List.Item>
              <List.Item>
                <strong>Github</strong> <a href="https://github.com/helmuthdu">helmuthdu</a>
              </List.Item>
              <List.Item>
                <strong>Location</strong> Brasília/DF - Brazil
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          {/* EXPERIENCES */}
          <Segment basic>
            <Header>My Experiences</Header>
            <List relaxed>
              {EXPERIENCES.map(experience => (
                <List.Item>
                  <List.Icon name={experience.icon} size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header>{experience.header}</List.Header>
                    <List.Description>{experience.description}</List.Description>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default About;
