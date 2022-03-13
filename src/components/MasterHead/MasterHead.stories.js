import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import MasterHead from './MasterHead';

const withReadme = require('storybook-readme/with-readme').default;
const AboutReadme = require('./README.md');

storiesOf('MasterHead', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AboutReadme))
  .add('default', () => {
    return <MasterHead />;
  });
