// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider, Form, Grid, Header, Segment } from 'semantic-ui-react';
import ContactMap from '../ContactMap/ContactMap';

interface IContact {
  id: string;
}

export const Contact = ({ id }: IContact) => (
  <Segment id={id} vertical inverted textAlign="center" className="stripe feature">
    <Header size="large" inverted>
      CONTACT
      <Header sub>
        <cite>
          "Here is a powerful yet simple rule. Always give people more than they expect to get." – Nelson Boswell
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
              <Form.Field required>
                <label>Email</label>
                <input type="email" name="email" maxLength="100" placeholder="Email" />
              </Form.Field>
              <Form.Field required>
                <label>Name</label>
                <input type="text" name="name" maxLength="100" placeholder="Name" />
              </Form.Field>
              <Form.Field required>
                <label>Title</label>
                <input type="text" name="title" maxLength="100" placeholder="Title" />
              </Form.Field>
              <Form.Field required>
                <label>Message</label>
                <textarea name="message" maxLength="600" placeholder="Message" rows="3" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default connect()(Contact);
