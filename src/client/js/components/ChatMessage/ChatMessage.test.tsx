import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ChatMessage } from './ChatMessage';
import { contacts, pushMessage } from '../../stub/stub';
const chat = contacts.find((el) => el.id == 1).chats;
const props = {
  sendMessage: jest.fn(),
  withUserId: 1,
  chat: chat,
  thisUser: 4,
};

let wrapper: ShallowWrapper<ChatMessage>;

beforeEach(() => {
  const app = <ChatMessage {...props} />;
  wrapper = shallow(app);
});

describe('<ChatMessage />', () => {
  test('it should render the messages properly', () => {
    expect(wrapper.find('div.message-wrapper').length).toBe(chat.length);
  });
});
