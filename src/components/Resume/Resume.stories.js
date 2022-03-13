import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Resume from './Resume';

const withReadme = require('storybook-readme/with-readme').default;
const ResumeReadme = require('./README.md');

storiesOf('Resume', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ResumeReadme))
  .add('default', () => {
    return <Resume id="resume" />;
  });
