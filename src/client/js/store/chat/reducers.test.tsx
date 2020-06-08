import reducer, { initialState } from './reducer';
import { ChatActionTypes } from './actions';
import { contacts } from '../../stub/stub';
import { messageSendObj } from '../../stub/test';

describe('Chat reducers', () => {
  test('LoadAllContact', () => {
    const action = {
      type: ChatActionTypes.LoadAllContact,
      payload: null,
    };
    const newState = reducer(initialState, action);
    expect(newState.contacts).toEqual(
      contacts
        .filter((el) => el.id != 4)
        .map((el) => ({ name: el.name, id: el.id }))
    );
  });

  test('LoadChatWithSingleUser', () => {
    const action = {
      type: ChatActionTypes.LoadChatWithSingleUser,
      payload: messageSendObj.toId,
    };
    const newState = reducer(initialState, action);
    expect(newState.withUser).toEqual(action.payload);
    expect(newState.chats).toEqual(
      contacts.find((el) => el.id == action.payload).chats
    );
  });

  test('UserLogout', () => {
    const action = {
      type: ChatActionTypes.SendMessge,
      payload: messageSendObj,
    };
    const newState = reducer(initialState, action);
    expect(newState.chats).toEqual(
      contacts.find((el) => el.id == action.payload.toId).chats
    );
  });
});
