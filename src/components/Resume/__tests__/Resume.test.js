import { shallow } from 'enzyme';
import { Resume } from '../Resume';

describe('component -> Resume', () => {
  let id = 'about';

  it('should have id defined', () => {
    const wrapper = shallow(<Resume id={id} />);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });
});
