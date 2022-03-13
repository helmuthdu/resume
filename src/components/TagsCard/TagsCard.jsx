import PropTypes from 'prop-types';
import { Card, List } from 'semantic-ui-react';

const TagCard = props => {
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

TagCard.propTypes = {
  tag: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};

export default TagCard;
