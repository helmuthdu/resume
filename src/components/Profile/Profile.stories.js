const withReadme = require('storybook-readme/with-readme').default;
const ProfileReadme = require('./README.md');

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Profile } from './Profile';

storiesOf('Profile', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ProfileReadme))
  .add('default', () => {
    return <Profile id="profile" />;
  });