import { render } from 'enzyme';
import BlogPagination from '../BlogPagination';

const LinkStub = props => <div {...props} />;

describe('component -> BlogPagination', () => {
  it('should render nothing if only 1 page', () => {
    const pathname = '/blog/page/1/';
    const pageCount: number = 1;

    const wrapper = render(<BlogPagination pathname={pathname} Link={LinkStub} pageCount={pageCount} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly 5 pages', () => {
    const pathname = '/blog/page/2/';
    const pageCount: number = 5;

    const wrapper = render(<BlogPagination pathname={pathname} Link={LinkStub} pageCount={pageCount} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly 10 pages', () => {
    const pathname = '/blog/page/5/';
    const pageCount: number = 10;

    const wrapper = render(<BlogPagination pathname={pathname} Link={LinkStub} pageCount={pageCount} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly 20 pages', () => {
    const pathname = '/blog/page/5/';
    const pageCount: number = 20;

    const wrapper = render(<BlogPagination pathname={pathname} Link={LinkStub} pageCount={pageCount} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have first link active if no match', () => {
    const pathname = '/plop';
    const pageCount: number = 10;

    const wrapper = render(<BlogPagination pathname={pathname} Link={LinkStub} pageCount={pageCount} />);
    expect(wrapper).toMatchSnapshot();
  });
});
