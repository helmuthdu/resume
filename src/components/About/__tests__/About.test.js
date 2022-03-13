import { shallow } from 'enzyme';
import { About } from '../About';

describe('component -> About', () => {
  let id = 'about';

  it('should have id defined', () => {
    const wrapper = shallow(<About id={id} />);
    expect(wrapper.find({ id }).prop('id')).toBe(id);
  });
});
