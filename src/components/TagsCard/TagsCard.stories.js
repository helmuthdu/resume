import { action } from '@storybook/addon-actions';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import TagsCard from './TagsCard';

const withReadme = require('storybook-readme/with-readme').default;
const TagsCardReadme = require('./README.md');

const tags = [
  { fieldValue: 'tag01', totalCount: 2 },
  { fieldValue: 'tag02', totalCount: 4 },
  { fieldValue: 'tag03', totalCount: 6 }
];

const LinkStub = props => <div onClick={action(props.to.toString())}>{props.children}</div>;

storiesOf('TagsCard', module)
  .addDecorator(withReadme(TagsCardReadme))
  .addDecorator(withKnobs)
  .add('default', () => {
    return <TagsCard tags={tags} Link={LinkStub} />;
  })
  .add('with tag property', () => {
    const tag = select(
      'Tag',
      tags.map(t => t.fieldValue),
      'tag01'
    );
    return <TagsCard tags={tags} tag={tag} Link={LinkStub} />;
  });
