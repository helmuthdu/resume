import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { HeaderMenu } from './HeaderMenu';

const withReadme = require('storybook-readme/with-readme').default;
const HeaderMenuReadme = require('./README.md');

const items = [
  { name: 'Home', path: '/', exact: true },
  { name: 'About', path: '/about/', exact: true },
  { name: 'Blog', path: '/blog/', exact: false }
];

const LinkStub = props => (
  <div {...props} onClick={action(props.to.toString())}>
    {props.children}
  </div>
);
const dispatchStub = a => action(a.type)(a) && a;
storiesOf('HeaderMenu', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(HeaderMenuReadme))
  .add('default', () => {
    const pathname = text('pathname', '/');
    const inverted = boolean('inverted', false);

    return (
      <HeaderMenu
        link={LinkStub}
        items={items}
        pathname={pathname}
        inverted={inverted}
        dispatch={dispatchStub}
        toggleSidebar={action('toggleSidebar')}
      />
    );
  });
