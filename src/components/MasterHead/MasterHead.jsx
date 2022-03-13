import PropTypes from 'prop-types';
import { Button, Container, Icon, Header, Segment, List, Divider } from 'semantic-ui-react';
import { menuItems } from '../../layouts/DefaultLayout';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

export const MasterHead = ({ pathname }) => (
  <Segment vertical inverted textAlign="center" className="masthead">
    <HeaderMenu pathname={pathname} items={menuItems} pointing secondary inverted visible />
    <Container text>
      <Header inverted as="h1">
        Helmuth Saatkamp
      </Header>
      <Header inverted as="h2">
        Software Engineer
      </Header>
      <List horizontal>
        <List.Item as="a" href="https://www.linkedin.com/in/helmuthdu" target="_blank">
          <Icon name="linkedin" size="large" />
        </List.Item>
        <List.Item as="a" href="https://github.com/helmuthdu" target="_blank">
          <Icon name="github" size="large" />
        </List.Item>
      </List>
      <Divider hidden />
      <Button
        color={'blue'}
        inverted
        size="large"
        as="a"
        href="https://github.com/helmuthdu/resume/raw/master/public/docs/helmuth_saatkamp_resume_en.pdf">
        Download My CV
      </Button>
    </Container>
  </Segment>
);

MasterHead.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default MasterHead;
