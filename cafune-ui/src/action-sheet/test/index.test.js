import ActionSheet from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

const mockProps = {
  title: 'test title',
  horizon: {
    wrap: false,
    list: [
      {
        name: 'hi',
        subName: 'hi sub',
        icon:
          'https://image.uisdc.com/wp-content/uploads/2018/07/uiii-ps-icon.png',
        badge: true,
        action() {
          console.log('ps hi');
        }
      },
      {
        name: 'hi2',
        subName: 'hi2 sub',
        icon: 'search',
        badge: '2',
        action: '/'
      },
      {
        name: 'hi2',
        subName: 'hi2 sub',
        icon: 'search',
        badge: '2'
      },
      {
        name: 'hi2',
        subName: 'hi2 sub',
        icon: 'search',
        badge: '2'
      },
      {
        name: 'hi2',
        subName: 'hi2 sub',
        icon: 'search',
        badge: '2'
      }
    ]
  },
  vertialList: [
    {
      name: 'browser',
      icon: 'browser'
    },
    {
      name: 'error',
      subName: 'on disabled state',
      icon: 'error',
      align: 'center',
      isDisabled: true
    },
    {
      name: 'refresh',
      subName: 'on loading state',
      icon: 'refresh',
      align: 'right',
      isLoading: true
    }
  ],
  cancelText: 'cancel',
  confirmText: 'confirm'
};
describe('ActionSheet', () => {
  it('should render properly', () => {
    const onCancel = jest.fn();
    const wrapper = shallow(
      <ActionSheet isShow {...mockProps} onClose={onCancel} showConfirm />
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<ActionSheet isShow={false} {...mockProps} onClose={onCancel} />);
    setTimeout(() => {
      expect(onCancel).toHaveBeenCalled();
    }, 300);
  });
});
