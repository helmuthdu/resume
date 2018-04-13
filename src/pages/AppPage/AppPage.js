// @flow
import React, { Component, Fragment } from 'react';
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
import About from '../../components/About/About';
import { ContactMap } from '../../components/ContactMap/ContactMap';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Profile from '../../components/Profile/Profile';
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
        <Segment id="resume" vertical textAlign="center" className="stripe alternate feature">
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
                                Performed design, front-end architecture, and development for market analysis and reports using Vue and node for car companies (ex: Toyota, Hyundai, Ford).
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                Assisted in development of back-end features in ASP.NET.
                              </List.Content>
                            </List.Item>
                          </List>
                        </Feed.Extra>
                      </Feed.Content>
                    </Feed.Event>
                    <Divider hidden/>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Date>jan 2013 - nov 2013</Feed.Date>
                        <Feed.Summary>Programmer - Hex</Feed.Summary>
                        <Feed.Extra text>
                          <List relaxed>
                            <List.Item>
                              <List.Content>
                                Full stack web developer responsible for end-to-end web app development of an online GIS
                                to show deforestation and hazards in Brazil for <a href="http://www.ibama.gov.br/" target="_blank" rel="noopener noreferrer">IBAMA</a> using PHP and JQuery.
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                Development team leader with 2-3 developers.
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
                                Developed a <a href="http://cn-events.azurewebsites.net/e" target="_blank" rel="noopener noreferrer">check-in web app</a> for children's department in a local church using Angular, ASP.NET Core and SQL Server and Azure.
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                Built a gis web app to show earthquakes in brazil for the <a href="http://obsis.unb.br/sisbra" target="_blank" rel="noopener noreferrer">Seismological Observatory</a> using Meteor and MongoDB.
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
                        <Feed.Date>2007 - 2013</Feed.Date>
                        <Feed.Summary>Bachelor of Computing - University of Brasília</Feed.Summary>
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
                        <Feed.Summary>
                          <a href="https://www.codeschool.com/users/helmuthdu" target="_blank" rel="noopener noreferrer">Codeschool</a>
                        </Feed.Summary>
                        <Feed.Extra text>
                          <strong>36</strong> Courses completed & <strong>180</strong> Levels completed
                        </Feed.Extra>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Summary>
                          <a href="https://egghead.io" target="_blank" rel="noopener noreferrer">Egghead.io</a>
                        </Feed.Summary>
                        <Feed.Extra text>
                          <strong>22</strong> Courses completed & <strong>319</strong> Lessons watched
                        </Feed.Extra>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Summary>
                          <a href="https://www.udemy.com/user/helmuthsaatkamp" target="_blank" rel="noopener noreferrer">Udemy</a>
                        </Feed.Summary>
                        <Feed.Extra text>
                          <strong>8</strong> Courses completed
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
                    <Label>Visual Thinking</Label>
                  </Label.Group>
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
                        <Feed.Summary>HTML / CSS / SASS <Progress percent={100} size='tiny' color="blue" className="skill-bar"/></Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Summary>Javascript / Node <Progress percent={100} size='tiny' color="blue" className="skill-bar"/></Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Summary>Vue / Angular / React <Progress percent={100} size='tiny' color="blue" className="skill-bar"/></Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Summary>C# / Asp.Net Core <Progress percent={80} size='tiny' color="blue" className="skill-bar"/></Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Summary>SQL Server / PostgreSQL / MongoDB <Progress percent={80} size='tiny' color="blue" className="skill-bar"/></Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Summary>Affinity Design <Progress percent={100} size='tiny' color="blue" className="skill-bar"/></Feed.Summary>
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
                        <Feed.Summary>Portuguese <Progress percent={100} size='tiny' color="blue" className="skill-bar"/></Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Summary>English <Progress percent={70} size='tiny' color="blue" className="skill-bar"/></Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Profile id="portfolio"/>

        {/* CONTACT */}
        <Segment id="contact" vertical inverted textAlign="center" className="stripe feature">
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
                <ContactMap isMarkerShown/>
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
      </Fragment>
    );
  }
}
