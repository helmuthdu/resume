const withReadme = (require('storybook-readme/with-readme')).default;
const ResumeReadme = require('./README.md');

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Resume from './Resume';

storiesOf('Resume', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ResumeReadme))
  .add('default', () => {
    return (
      <Resume id="resume"/>
    );
  });
