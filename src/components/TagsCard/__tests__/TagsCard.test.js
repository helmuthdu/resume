import { shallow } from 'enzyme';
import React from 'react';
import { List } from 'semantic-ui-react';
import TagsCard from '../TagsCard';

describe('component -> TagsCard', () => {
  let LinkStub;

  beforeEach(() => {
    LinkStub = props => <div>{props.children}</div>;
  });

  it('should list all the tags', () => {
    const tags = [
      { fieldValue: 'tag01', totalCount: 2 },
      { fieldValue: 'tag02', totalCount: 4 },
      { fieldValue: 'tag03', totalCount: 6 }
    ];

    const wrapper = shallow(<TagsCard tags={tags} Link={LinkStub} />);

    expect(wrapper.find(List.Item)).toHaveLength(3);
  });

  it('should have on tag active', () => {
    const tags = [
      { fieldValue: 'tag01', totalCount: 2 },
      { fieldValue: 'tag02', totalCount: 4 },
      { fieldValue: 'tag03', totalCount: 6 }
    ];

    const wrapper = shallow(<TagsCard tags={tags} Link={LinkStub} tag="tag01" />);

    expect(wrapper).toMatchSnapshot();
  });
});
