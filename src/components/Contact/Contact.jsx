import PropTypes from 'prop-types';
import { Button, Divider, Form, Grid, Header, Segment } from 'semantic-ui-react';
import ContactMap from '../ContactMap/ContactMap';

const FIELDS = [
  {
    label: 'Email',
    type: 'input',
    props: {
      type: 'email',
      name: 'email',
      maxLength: '100',
      placeholder: 'Email'
    }
  },
  {
    label: 'Name',
    type: 'input',
    props: {
      type: 'text',
      name: 'name',
      maxLength: '100',
      placeholder: 'Name'
    }
  },
  {
    label: 'Title',
    type: 'input',
    props: {
      type: 'text',
      name: 'title',
      maxLength: '100',
      placeholder: 'Title'
    }
  },
  {
    label: 'Message',
    type: 'textarea',
    props: {
      name: 'message',
      maxLength: '600',
      placeholder: 'Message',
      rows: '3'
    }
  }
];

export const Contact = ({ id }) => (
  <Segment id={id} vertical inverted textAlign="center" className="stripe feature">
    <Header size="large" inverted>
      CONTACT
      <Header sub>
        <cite>
          &quot;Here is a powerful yet simple rule. Always give people more than they expect to get.&quot; – Nelson
          Boswell
        </cite>
      </Header>
    </Header>
    <Divider hidden section />
    <Grid stackable textAlign="left" className="container">
      <Grid.Row>
        <Grid.Column width="11">
          <ContactMap isMarkerShown />
        </Grid.Column>
        <Grid.Column width="5">
          <Segment piled>
            <Form method="POST" action="https://formspree.io/helmuthdu@gmail.com">
              {FIELDS.map(field => (
                <Form.Field key={field.label} required>
                  <label>{field.label}</label>
                  <field.type {...field.props} />
                </Form.Field>
              ))}
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired
};

export default Contact;
