// @flow
import React, { Fragment } from 'react';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import { menuItems } from '../../layouts/DefaultLayout';
import { Button, Container, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) =>
  <Fragment>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu pathname={props.location.pathname} items={menuItems} inverted/>
      <Container text>
        <Header inverted as="h1">React</Header>
        <Header inverted as="h2">Flow - Jest - Semantic UI</Header>
        <Button primary size="huge">Get started!</Button>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid columns="3" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            {/* WHO AM I? */}
            <Header>Who am I?</Header>
            <em>
              A talented Web Developer / Designer Located in Our Lovely Earth<br/>
            </em>
              Advanced web developer with expertise in designing, architecture, developing and implementing interactive websites.
              Creative and innovate, love learning new technologies and fixing little details that matters.
              Also I like working in a team, you'll learn faster and much more.
          </Grid.Column>
          <Grid.Column>
            {/* PERSONAL INFO */}
            <Header>Personal Info</Header>
            <List>
              <List.Item><strong>Birthdate</strong> 18/02/1986</List.Item>
              <List.Item><strong>Phone</strong> +55 61 98105-6014</List.Item>
              <List.Item><strong>Email</strong> helmuthdu@gmail.com</List.Item>
              <List.Item><strong>Skype</strong> helmuthdu</List.Item>
              <List.Item><strong>Github</strong> https://github.com/helmuthdu</List.Item>
              <List.Item><strong>Location</strong> Brazil - Brasília/DF</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            {/* MY EXPERTISE */}
            <Header>My Expertise</Header>
            <List relaxed>
              <List.Item>
                <List.Icon name='computer' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header as='a'>Web Design</List.Header>
                  <List.Description as='a'>Progressive Web Pages Experience</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='fork' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header as='a'>Web Development</List.Header>
                  <List.Description as='a'>Frontend and Backend Experience</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='world' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header as='a'>GIS</List.Header>
                  <List.Description as='a'>Geographic Information Systems Experience</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptas eaque at quae cupiditate aspernatur quibusdam!
              Distinctio quod non, harum dolorum earum molestias,
              beatae expedita aliquam dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptas eaque at quae cupiditate aspernatur quibusdam!
              Distinctio quod non, harum dolorum earum molestias,
              beatae expedita aliquam dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptas eaque at quae cupiditate aspernatur quibusdam!
              Distinctio quod non, harum dolorum earum molestias,
              beatae expedita aliquam dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Fragment>;
