import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import SidebarMenu from './SidebarMenu';

const withReadme = require('storybook-readme/with-readme').default;
const SidebarMenuReadme = require('./README.md');

const items = [
  { name: 'Home', path: '/', exact: true, icon: 'home' },
  { name: 'About', path: '/about/', exact: true, icon: 'info circle' },
  { name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper' }
];

const LinkStub = props => (
  <div {...props} onClick={action(props.to.toString())}>
    {props.children}
  </div>
);

storiesOf('SidebarMenu', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(SidebarMenuReadme))
  .add('default', () => {
    const pathname = text('pathname', '/');

    return <SidebarMenu Link={LinkStub} items={items} pathname={pathname} visible />;
  });
