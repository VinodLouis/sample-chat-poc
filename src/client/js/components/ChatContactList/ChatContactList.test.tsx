import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ChatContactList } from './ChatContactList';
import { contacts, pushMessage } from '../../stub/stub';
const contact = contacts.map((el) => ({ name: el.name, id: el.id }));
const props = {
  contacts: contact,
  contactSelected: jest.fn(),
  withUserId: 1,
};

let wrapper: ShallowWrapper<ChatContactList>;

beforeEach(() => {
  const app = <ChatContactList {...props} />;
  wrapper = shallow(app);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<ChatContactList />', () => {
  test('it should render all the contacts', () => {
    expect(wrapper.find('div.contact-list-card').length).toBe(contact.length);
  });

  test('it should respond to contact click', () => {
    wrapper
      .find('div.contact-list-card')
      .last()
      .simulate('click');
    expect((wrapper.instance().props as any).contactSelected).toBeCalledTimes(
      1
    );
  });
});
