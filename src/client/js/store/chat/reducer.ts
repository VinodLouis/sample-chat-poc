import { contacts, pushMessage } from '../../stub/stub';
import {
  ChatActionTypes,
  LoadAllContact,
  LoadCurrentUser,
  LoadChatWithSingleUser,
  SendMessage,
} from './actions';
import { ChatState } from './types';
export type ChatAction = ReturnType<
  | typeof LoadAllContact
  | typeof LoadChatWithSingleUser
  | typeof SendMessage
  | typeof LoadCurrentUser
>;

export const initialState = {
  chats: [],
  contacts: [],
  currUser: 4,
  currUserDetails: {},
  withUser: null,
};

export default (
  state: ChatState = initialState,
  action: ChatAction
): ChatState => {
  switch (action.type) {
    case ChatActionTypes.LoadAllContact:
      console.log(contacts.filter((el) => el.id != state.currUser));
      return {
        ...state,
        contacts: contacts
          .filter((el) => el.id != state.currUser)
          .map((el) => ({ name: el.name, id: el.id })),
      };
    case ChatActionTypes.LoadCurrentUser:
      return {
        ...state,
        currUser: action.payload,
        currUserDetails: contacts.find((el) => el.id == action.payload),
      };
    case ChatActionTypes.LoadChatWithSingleUser:
      return {
        ...state,
        withUser: action.payload,
        chats: contacts.find((el) => el.id == action.payload).chats,
      };
    case ChatActionTypes.SendMessge:
      pushMessage(
        action.payload.message,
        action.payload.fromId,
        action.payload.toId
      );
      return {
        ...state,
        chats: contacts.find((el) => el.id == action.payload.toId).chats,
      };
    default:
      return state;
  }
};
