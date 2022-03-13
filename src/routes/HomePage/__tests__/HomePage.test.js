import { shallow } from 'enzyme/build/index';
import HomePage from '../HomePage';

describe('pages -> HomePage component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<HomePage location="/" />);
    expect(wrapper.instance()).toBeNull();
  });
});
