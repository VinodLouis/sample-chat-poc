import {
  LoadAllContact,
  LoadChatWithSingleUser,
  SendMessage,
  ChatActionTypes,
} from './actions';
import { messageSendObj } from '../../stub/test';

describe('Chat actions', () => {
  test('Load All contact', () => {
    const action = LoadAllContact();
    expect(action).toEqual({
      payload: null,
      type: ChatActionTypes.LoadAllContact,
    });
  });

  test('LoadChatWithSingleUser', () => {
    const action = LoadChatWithSingleUser(messageSendObj.toId);
    expect(action).toEqual({
      payload: messageSendObj.toId,
      type: ChatActionTypes.LoadChatWithSingleUser,
    });
  });

  test('SendMessage', () => {
    const action = SendMessage(
      messageSendObj.message,
      messageSendObj.fromId,
      messageSendObj.toId
    );
    expect(action).toEqual({
      type: ChatActionTypes.SendMessge,
      payload: messageSendObj,
    });
  });
});
