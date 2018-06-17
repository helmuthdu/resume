// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Divider, Grid, Header, List, Segment } from 'semantic-ui-react';

interface IAbout {
  id: string;
}

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
          {/* MY EXPERTISE */}
          <Segment basic>
            <Header>My Expertise</Header>
            <List relaxed>
              <List.Item>
                <List.Icon name="fork" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">Web Development</List.Header>
                  <List.Description as="a">Frontend and Backend Experience</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="computer" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">Web Design</List.Header>
                  <List.Description as="a">Progressive web pages, wireframes and mockups Experience</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="world" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">GIS</List.Header>
                  <List.Description as="a">Geographic Information Systems Experience</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default connect()(About);
