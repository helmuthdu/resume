// @flow
import React, { Fragment } from 'react';
import {
  Button,
  Container,
  Divider,
  Feed,
  Form,
  Grid,
  Header,
  Icon,
  Label,
  List,
  Progress,
  Segment
} from 'semantic-ui-react';
import { ContactMap } from '../../components/ContactMap/ContactMap';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import { menuItems } from '../../layouts/DefaultLayout';

import '../../pages/AppPage/AppPage.css';

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
        <Header inverted as="h1">Helmuth Saatkamp</Header>
        <Divider/>
        <Header inverted as="h2">Web Developer</Header>
        <Button primary size="large">Download My CV</Button>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe" textAlign="center">
      <Header size="large">
        ABOUT ME
        <Header sub>
          <cite>A talented Web Developer/Designer Located in Our Lovely Earth<br/></cite>
        </Header>
      </Header>
      <Divider hidden section/>
      <Grid columns="3" divided relaxed stackable textAlign="left" className="container">
        <Grid.Row>
          <Grid.Column>
            {/* WHO AM I? */}
            <Header>Who am I?</Header>
            Full stack web developer with a passion for programming, with expertise in designing, architecture and developing.
            Creative and innovative, I love learning new technologies and fixing small details that matter.
            Also, I like working in a team, you'll learn faster and much more.
          </Grid.Column>
          <Grid.Column>
            {/* PERSONAL INFO */}
            <Header>Personal Info</Header>
            <List>
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
                <List.Icon name='computer' size='large' verticalAlign='middle'/>
                <List.Content>
                  <List.Header as='a'>Web Design</List.Header>
                  <List.Description as='a'>Progressive Web Pages Experience</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='fork' size='large' verticalAlign='middle'/>
                <List.Content>
                  <List.Header as='a'>Web Development</List.Header>
                  <List.Description as='a'>Frontend and Backend Experience</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='world' size='large' verticalAlign='middle'/>
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
    <Segment vertical textAlign="center" className="stripe alternate feature">
      <Header size="large">
        RESUME
        <Header sub>
          <cite>"Life without knowledge is death in disguise." - Talib Kweli</cite>
        </Header>
      </Header>
      <Divider hidden section/>
      <Grid columns="3" stackable textAlign="left" className="container">
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Header icon>
                Expertise
              </Header>
              <Icon name="briefcase" size="large" color="grey" className="pull-right"/>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Date>nov 2013 - <Label size="small" color="blue">Current</Label></Feed.Date>
                    <Feed.Summary>Senior Web Developer - Neocom</Feed.Summary>
                    <Feed.Extra text>
                      <List relaxed>
                        <List.Item>
                          <List.Content>
                            Performed design, architecture and development of webapp for market analysis and reports
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            Create micro services and provide integration into the current platform
                          </List.Content>
                        </List.Item>
                      </List>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
                <Divider hidden/>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Date>dez 2012 - nov 2013</Feed.Date>
                    <Feed.Summary>Programmer - Hex</Feed.Summary>
                    <Feed.Extra text>
                      <List relaxed>
                        <List.Item>
                          <List.Content>
                            Full stack web developer responsible for end-to-end web app development
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            Create an online GIS to show deforestation and hazards in Brazil
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            Development team leader with 2-3 developers
                          </List.Content>
                        </List.Item>
                      </List>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
                <Divider hidden/>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Date>dez 2013 - <Label size="small" color="blue">Current</Label></Feed.Date>
                    <Feed.Summary>Freelance Web Developer</Feed.Summary>
                    <Feed.Extra text>
                      <List relaxed>
                        <List.Item>
                          <List.Content>
                            Developed an check-in webapp for a local church's children's department
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            Built a gis webapp to show earthquakes in brazil for the seismological observatory
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            Created a webapp to show where buses are on a map and estimate when they will arrive at your stop.
                          </List.Content>
                        </List.Item>
                      </List>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header icon>
                Education
              </Header>
              <Icon name="pencil" size="large" color="grey" className="pull-right"/>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Date>2008 - 2013</Feed.Date>
                    <Feed.Summary>Degree in Computer Science - UnB</Feed.Summary>
                    <Feed.Extra text>
                      Coursework in Programming, Data Structures, and Computer Architecture
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Segment>
            <Segment>
              <Header icon>
                Courses
              </Header>
              <Icon name="book" size="large" color="grey" className="pull-right"/>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>Codeschool</Feed.Summary>
                    <Feed.Extra text>
                      https://www.codeschool.com/users/helmuthdu
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>Udemy</Feed.Summary>
                    <Feed.Extra text>
                      https://www.udemy.com/user/helmuthsaatkamp/
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Segment>
            <Segment>
              <Header icon>
                Assets
              </Header>
              <Icon name="tags" size="large" color="grey" className="pull-right"/>
              <Divider hidden/>
              <Label.Group size='large'>
                <Label>Responsible</Label>
                <Label>Diligence</Label>
                <Label>Labour</Label>
                <Label>Creative</Label>
                <Label>Rigor</Label>
                <Label>Initiative</Label>
                <Label>Funny</Label>
              </Label.Group>
            </Segment>
            <Segment>
              <Header icon>
                Interests
              </Header>
              <Icon name="rss" size="large" color="grey" className="pull-right"/>
              <Divider hidden/>
              <List horizontal>
                <List.Item>
                  <Icon circular name='music'/>
                  <List.Content>
                    <List.Header>Music</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Icon circular name='game'/>
                  <List.Content>
                    <List.Header>Gaming</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Icon circular name='tv'/>
                  <List.Content>
                    <List.Header>Anime</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header icon>
                Skills
              </Header>
              <Icon name="configure" size="large" color="grey" className="pull-right"/>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>HTML / CSS / SASS</Feed.Summary>
                    <Feed.Extra>
                      <Progress percent={90} size='tiny' color="blue"/>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>Javascript / Node</Feed.Summary>
                    <Feed.Extra>
                      <Progress percent={100} size='tiny' color="blue"/>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>JQuery / Vue / Angular / React</Feed.Summary>
                    <Feed.Extra>
                      <Progress percent={100} size='tiny' color="blue"/>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>C# / Asp.Net Core</Feed.Summary>
                    <Feed.Extra>
                      <Progress percent={70} size='tiny' color="blue"/>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>Affinity Design</Feed.Summary>
                    <Feed.Extra>
                      <Progress percent={100} size='tiny' color="blue"/>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Segment>
            <Segment>
              <Header icon>
                Languages
              </Header>
              <Icon name="microphone" size="large" color="grey" className="pull-right"/>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>Portuguese</Feed.Summary>
                    <Feed.Extra>
                      <Progress percent={100} size='tiny' color="blue"/>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>English</Feed.Summary>
                    <Feed.Extra>
                      <Progress percent={70} size='tiny' color="blue"/>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>German</Feed.Summary>
                    <Feed.Extra>
                      <Progress percent={20} size='tiny' color="blue"/>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    {/* Key features */}
    <Segment vertical inverted textAlign="center" className="stripe feature">
      <Header size="large" inverted>
        CONTACT
        <Header sub>
          <cite>"Here is a powerful yet simple rule. Always give people more than they expect to get." – Nelson Boswell</cite>
        </Header>
      </Header>
      <Divider hidden section/>
      <Grid stackable textAlign="left" className="container">
        <Grid.Row>
          <Grid.Column width="11">
            <ContactMap isMarkerShown></ContactMap>
          </Grid.Column>
          <Grid.Column width="5">
            <Segment piled>
              <Form>
                <Form.Field required>
                  <label>Email</label>
                  <input placeholder='Email'/>
                </Form.Field>
                <Form.Field required>
                  <label>Name</label>
                  <input placeholder='Name'/>
                </Form.Field>
                <Form.Field required>
                  <label>Title</label>
                  <input placeholder='Title'/>
                </Form.Field>
                <Form.Field required>
                  <label>Message</label>
                  <textarea placeholder='Message' rows="3"/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Fragment>;
