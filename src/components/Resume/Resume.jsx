// @flow
import React from 'react';
import { Divider, Feed, Grid, Header, Icon, Label, List, Progress, Segment } from 'semantic-ui-react';

interface IResume {
  id: string;
}

const ASSETS = ['Responsible', 'Diligence', 'Labour', 'Creative', 'Rigor', 'Initiative', 'Funny', 'Visual Thinking'];

const SKILLS = [
  {
    name: 'HTML / CSS / SASS',
    level: 100
  },
  {
    name: 'Javascript / Node',
    level: 100
  },
  {
    name: 'Vue / Angular / React',
    level: 100
  },
  {
    name: 'C# / Asp.Net Core',
    level: 65
  },
  {
    name: 'SQL Server / PostgreSQL / MongoDB',
    level: 65
  },
  {
    name: 'Affinity Design',
    level: 100
  }
];

const LANGUAGES = [
  {
    name: 'Portuguese',
    level: 100
  },
  {
    name: 'English',
    level: 75
  },
  {
    name: 'German',
    level: 10
  }
];

export const Resume = ({ id }: IResume) => (
  <Segment id={id} vertical textAlign="center" className="stripe alternate feature">
    <Header size="large">
      RESUME
      <Header sub>
        <cite>"Life without knowledge is death in disguise." - Talib Kweli</cite>
      </Header>
    </Header>
    <Divider hidden section />
    <Grid columns="3" stackable textAlign="left" className="container">
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Header icon>Work Experience</Header>
            <Icon name="briefcase" color="grey" className="pull-right" />
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date>
                    set 2018 -{' '}
                    <Label size="small" color="blue">
                      Current
                    </Label>
                  </Feed.Date>
                  <Feed.Summary>Senior Front End Engineer - Leverton</Feed.Summary>
                  <Feed.Extra text>
                    <List relaxed>
                      <List.Item>
                        <List.Content>
                          Implement new features for AI based systems using React/Redux/Saga and Typescript.
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>Maintainer of the company component library.</List.Content>
                      </List.Item>
                    </List>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
              <Divider hidden />
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date>nov 2013 - ago 2018</Feed.Date>
                  <Feed.Summary>Senior Front End Developer - Neocom</Feed.Summary>
                  <Feed.Extra text>
                    <List relaxed>
                      <List.Item>
                        <List.Content>
                          Performed design, front-end architecture, and development of market analysis and reporting
                          systems for automobile manufacturers using Vue, Kendo-UI, and Node.
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>Assisted in development of back-end features in ASP.NET.</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>Prototyped an average of 20 new product features per year.</List.Content>
                      </List.Item>
                    </List>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
              <Divider hidden />
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date>jan 2013 - nov 2013</Feed.Date>
                  <Feed.Summary>Systems Analyst - Hex</Feed.Summary>
                  <Feed.Extra text>
                    <List relaxed>
                      <List.Item>
                        <List.Content>
                          Full stack web developer responsible for development of an online GIS solution to show
                          deforestation and hazards in Brazil for{' '}
                          <a href="http://www.ibama.gov.br/" target="_blank" rel="noopener noreferrer">
                            IBAMA
                          </a>{' '}
                          using PHP and JQuery.
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>Development team leader with 2-3 developers.</List.Content>
                      </List.Item>
                    </List>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
              <Divider hidden />
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date>
                    dez 2013 -{' '}
                    <Label size="small" color="blue">
                      Current
                    </Label>
                  </Feed.Date>
                  <Feed.Summary>Freelance Web Developer</Feed.Summary>
                  <Feed.Extra text>
                    <List relaxed>
                      <List.Item>
                        <List.Content>
                          Developed a{' '}
                          <a href="http://cn-events.azurewebsites.net/e" target="_blank" rel="noopener noreferrer">
                            check-in web app
                          </a>{' '}
                          for the kid’s department at{' '}
                          <a href="http://comunidadedasnacoes.com.br" target="_blank" rel="noopener noreferrer">
                            Community of Nations
                          </a>{' '}
                          using Angular, ASP.NET Core, SQL Server, and Azure.
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          Built a gis web app to show earthquakes in Brazil for the{' '}
                          <a href="http://obsis.unb.br/sisbra" target="_blank" rel="noopener noreferrer">
                            Seismological Observatory
                          </a>{' '}
                          at the University of Brasilia using Meteor and MongoDB.
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
            <Header icon>Education</Header>
            <Icon name="pencil" color="grey" className="pull-right" />
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date>2007 - 2013</Feed.Date>
                  <Feed.Summary>Bachelor of Computing - University of Brasília</Feed.Summary>
                  <Feed.Extra text>Coursework in Programming, Data Structures, and Computer Architecture</Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Segment>
          <Segment>
            <Header icon>Courses</Header>
            <Icon name="book" color="grey" className="pull-right" />
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary>
                    <a href="https://www.codeschool.com/users/helmuthdu" target="_blank" rel="noopener noreferrer">
                      Codeschool
                    </a>
                  </Feed.Summary>
                  <Feed.Extra text>
                    <strong>36</strong> Courses completed & <strong>180</strong> Levels completed
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary>
                    <a href="https://egghead.io" target="_blank" rel="noopener noreferrer">
                      Egghead.io
                    </a>
                  </Feed.Summary>
                  <Feed.Extra text>
                    <strong>29</strong> Courses completed & <strong>395</strong> Lessons watched
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary>
                    <a href="https://www.udemy.com/user/helmuthsaatkamp" target="_blank" rel="noopener noreferrer">
                      Udemy
                    </a>
                  </Feed.Summary>
                  <Feed.Extra text>
                    <strong>8</strong> Courses completed
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Segment>
          <Segment>
            <Header icon>Assets</Header>
            <Icon name="tags" color="grey" className="pull-right" />
            <Divider hidden />
            <Label.Group size="large">
              {ASSETS.map(asset => (
                <Label key={asset}>{asset}</Label>
              ))}
            </Label.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header icon>Skills</Header>
            <Icon name="configure" color="grey" className="pull-right" />
            <Feed>
              {SKILLS.map(skill => (
                <Feed.Event key={skill.name}>
                  <Feed.Content>
                    <Feed.Summary>
                      {skill.name} <Progress percent={skill.level} size="tiny" color="blue" className="skill-bar" />
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              ))}
            </Feed>
          </Segment>
          <Segment>
            <Header icon>Languages</Header>
            <Icon name="microphone" color="grey" className="pull-right" />
            <Feed>
              {LANGUAGES.map(language => (
                <Feed.Event key={language.name}>
                  <Feed.Content>
                    <Feed.Summary>
                      {language.name}{' '}
                      <Progress percent={language.level} size="tiny" color="blue" className="skill-bar" />
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              ))}
            </Feed>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Resume;
