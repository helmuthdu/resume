const withReadme = require('storybook-readme/with-readme').default;
const ContactReadme = require('./README.md');

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Contact from './Contact';

storiesOf('Contact', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ContactReadme))
  .add('default', () => {
    return <Contact id="contact" />;
  });
