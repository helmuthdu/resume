import { css, StyleSheet } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import React from 'react';
import { Divider, Grid, Header, Image, List, Segment } from 'semantic-ui-react';

const EXPERIENCES = [
  {
    icon: 'fork',
    header: 'Web Development',
    description: 'Frontend and Backend'
  },
  {
    icon: 'computer',
    header: 'Web Design',
    description: 'Progressive web pages, wireframes and mockups'
  },
  {
    icon: 'world',
    header: 'GIS',
    description: 'Geographic Information Systems'
  }
];

export const About = ({ id }) => (
  <>
    <Image className={css(classes.avatar)} src="images/me.jpg" size="small" circular centered />
    <Segment id={id} vertical className="stripe" textAlign="center">
      <Header size="large">
        ABOUT ME
        <Header sub>
          <cite>
            A talented <strong>software engineer</strong> located on our lovely planet
            <br />
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
              Software engineer with a passion for programming and expertise in designing, architecture and developing.
              Creative and innovative, I love learning new technologies. I greatly value working in a team, where one
              can learn faster and much more.
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
                  <strong>Location</strong> Berlin, Germany
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
                  <List.Item key={experience.icon}>
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
  </>
);

About.propTypes = {
  id: PropTypes.string.isRequired
};

const classes = StyleSheet.create({
  avatar: {
    marginTop: '-70px',
    border: '4px solid white',
    marginBottom: '-70px'
  }
});

export default About;
