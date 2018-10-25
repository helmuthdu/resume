import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import About from './About';

const withReadme = require('storybook-readme/with-readme').default;
const AboutReadme = require('./README.md');

storiesOf('About', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AboutReadme))
  .add('default', () => {
    return <About id="about" />;
  });
