import * as React from 'react';
import { shallow } from 'enzyme';
import { Chat } from './Chat';
import { contacts, pushMessage } from '../../stub/stub';
window.prompt = jest.fn(() => '4');
let wrapper;
const props = {
  loadAllContact: jest.fn(),
  loadChatWithSingleUser: jest.fn(),
  loadCurrentUser: jest.fn(),
  contacts: contacts.map((el) => ({ name: el.name, id: el.id })),
  withUser: 1,
};

describe('<Chat />', () => {
  beforeEach(() => {
    wrapper = shallow(<Chat {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('it should load properly', () => {
    expect(wrapper.instance().props.contacts).toEqual(
      contacts.map((el) => ({ name: el.name, id: el.id }))
    );
    expect(wrapper.instance().props.withUser).toBe(1);
  });

  test('it should call the loadAllContact method', () => {
    expect(wrapper.instance().props.loadAllContact).toBeCalledTimes(1);
  });

  test('it should set a default chat partner', () => {
    expect(wrapper.instance().props.loadChatWithSingleUser).toBeCalledTimes(1);
  });
});
