import React from 'react';
import { Card, List } from 'semantic-ui-react';

interface TagsCardProps {
  tags: Array<any>;
  Link: any;
  tag?: string;
}

export default (props: TagsCardProps) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Tags</Card.Header>
      </Card.Content>
      <Card.Content>
        <List>
          {props.tags.map(tag => {
            const isActive = tag.fieldValue === props.tag;
            const activeStyle = {
              fontWeight: '700'
            };
            return (
              <List.Item as="a" key={tag.fieldValue}>
                <List.Icon name="tag" color={isActive ? 'blue' : null} />
                <List.Content style={isActive ? activeStyle : null}>
                  <props.Link to={`/blog/tags/${tag.fieldValue}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </props.Link>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Card.Content>
    </Card>
  );
};
