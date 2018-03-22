import { configure, shallow } from 'enzyme';
import 'jest';
import React from 'react';
import TagsCard from './TagsCard';

import { List } from 'semantic-ui-react';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('TagsCard component', () => {
  let LinkStub: any;

  beforeEach(() => {
    LinkStub = (props: any) =>
      <div>{props.children}</div>;
  });

  it('should list all the tags', () => {
    const tags = [
      { fieldValue: 'tag01', totalCount: 2 },
      { fieldValue: 'tag02', totalCount: 4 },
      { fieldValue: 'tag03', totalCount: 6 }
    ];

    const wrapper = shallow(<TagsCard tags={tags} Link={LinkStub}/>);

    expect(wrapper.find(List.Item)).toHaveLength(3);
  });

  it('should have on tag active', () => {
    const tags = [
      { fieldValue: 'tag01', totalCount: 2 },
      { fieldValue: 'tag02', totalCount: 4 },
      { fieldValue: 'tag03', totalCount: 6 }
    ];

    const wrapper = shallow(<TagsCard tags={tags} Link={LinkStub} tag="tag01"/>);

    expect(wrapper).toMatchSnapshot();
  });
});
