import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Divider, Feed, Grid, Header, Icon, Label, List, Progress, Segment } from 'semantic-ui-react';
import dayjs from 'dayjs';

const ASSETS = ['Responsible', 'Diligence', 'Labour', 'Creative', 'Rigor', 'Initiative', 'Funny', 'Visual Thinking'];

const SKILLS = [
  {
    name: 'HTML | CSS | SASS',
    level: 100
  },
  {
    name: 'Javascript | Typescript | Node',
    level: 100
  },
  {
    name: 'Vue | Angular | React',
    level: 100
  },
  {
    name: 'React-native | Flutter',
    level: 100
  },
  {
    name: 'C# | Asp.Net Core | Entity',
    level: 65
  },
  {
    name: 'SQL Server | PostgreSQL | MongoDB',
    level: 65
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
    level: 30
  }
];

const JOBS = [
  {
    current: true,
    startAt: new Date('2020-04-01'),
    endAt: new Date(),
    title: 'Senior Frontend Engineer',
    company: 'Mercedes-Benz.io',
    tasks: [
      'Create Web Solutions using Javascript/Typescript with Vue',
      'Improve our technology stack and support decisions in architecture',
      'Testing Coach, FE Team Facilitator, and Onboarding Buddy'
    ]
  },
  {
    current: false,
    startAt: new Date('2019-06-01'),
    endAt: new Date('2020-03-31'),
    title: 'Senior Frontend Engineer',
    company: 'NIST GmbH',
    tasks: [
      'Create Web Solutions using Javascript/Typescript with Next.js',
      'SEO improvements and performance optimizations'
    ]
  },
  {
    current: false,
    startAt: new Date('2018-09-15'),
    endAt: new Date('2019-05-30'),
    title: 'Senior Frontend Engineer',
    company: 'Leverton GmbH',
    tasks: [
      'Create Web Solutions using Javascript/Typescript with React',
      'Add unit tests and E2E tests to new/legacy products',
      'Maintainer of the company\'s component library'
    ]
  },
  {
    current: false,
    startAt: new Date('2013-11-01'),
    endAt: new Date('2018-08-31'),
    title: 'Senior Frontend Developer',
    company: 'Neocom',
    tasks: [
      'Create Web Solutions using Javascript/Typescript with Vue',
      'Support development of backend features using Node.js',
      'Create UI/UX design concepts\n'
    ]
  },
  {
    current: false,
    startAt: new Date('2013-01-01 '),
    endAt: new Date('2013-11-30'),
    title: 'Systems Analyst',
    company: 'Hex',
    tasks: []
  }
];

export const Resume = ({ id }) => (
  <Segment id={id} vertical textAlign="center" className="stripe alternate feature">
    <Header size="large">
      RESUME
      <Header sub>
        <cite>&quot;Life without knowledge is death in disguise.&quot; - Talib Kweli</cite>
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
              {JOBS.map(job => (
                <Fragment key={job.company}>
                  <Feed.Event>
                    <Feed.Content>
                      <Feed.Date>
                        {dayjs(job.startAt).format('MMM YYYY')} -{' '}
                        {job.current ? (
                          <Label size="small" color="blue">
                            Current
                          </Label>
                        ) : (
                          dayjs(job.endAt).format('MMM YYYY')
                        )}
                      </Feed.Date>
                      <Feed.Summary>
                        {job.title} - {job.company}
                      </Feed.Summary>
                      <Feed.Extra text>
                        <List relaxed>
                          {job.tasks.map((task, index) => (
                            <List.Item key={index}>
                              <List.Content>{task}</List.Content>
                            </List.Item>
                          ))}
                        </List>
                      </Feed.Extra>
                    </Feed.Content>
                  </Feed.Event>
                  <Divider hidden />
                </Fragment>
              ))}
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
                    <strong>34</strong> Courses completed & <strong>483</strong> Lessons watched
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

Resume.propTypes = {
  id: PropTypes.string.isRequired
};

export default Resume;
