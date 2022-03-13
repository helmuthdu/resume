import { shallow } from 'enzyme';
import { MasterHead } from '../MasterHead';

describe('component -> MasterHead', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<MasterHead pathname="/" />);
    expect(wrapper).toMatchSnapshot();
  });
});
