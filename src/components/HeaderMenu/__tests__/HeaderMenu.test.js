import { shallow } from 'enzyme';
import { HeaderMenu } from '../HeaderMenu';

const items = [
  { name: 'Home', path: '/', exact: true },
  { name: 'About', path: '/about/', exact: true },
  { name: 'Blog', path: '/blog/', exact: false }
];

const LinkStub = props => <div {...props} />;
const dispatchStub = a => a;

describe('component -> HeaderMenu', () => {
  it('should nothing active', () => {
    const wrapper = shallow(<HeaderMenu Link={LinkStub} items={items} pathname="/plop" dispatch={dispatchStub} />);
    expect(wrapper.find({ active: true }).length).toBe(0);
  });

  it('should have about as active (match exact)', () => {
    const wrapper = shallow(<HeaderMenu Link={LinkStub} items={items} pathname="/about/" dispatch={dispatchStub} />);
    expect(wrapper.find({ name: 'About' }).prop('active')).toBeTruthy();
  });

  it('should have blog as active (match not exact)', () => {
    const wrapper = shallow(<HeaderMenu Link={LinkStub} items={items} pathname="/blog/toto" dispatch={dispatchStub} />);
    expect(wrapper.find({ name: 'Blog' }).prop('active')).toBeTruthy();
  });

  it('should have inverted style', () => {
    const wrapper = shallow(
      <HeaderMenu Link={LinkStub} items={items} pathname="/blog/toto" dispatch={dispatchStub} inverted />
    );
    expect(wrapper.find({ inverted: true }).length).toBe(1);
  });

  it('should dispatch the correct message on burger click', () => {
    const dispatchMock = jest.fn();
    const wrapper = shallow(<HeaderMenu Link={LinkStub} items={items} pathname="" toggleSidebar={dispatchMock} />);
    wrapper.find('.mobile.only').simulate('click');
    expect(dispatchMock.mock.calls.length).toBe(1);
  });
});
