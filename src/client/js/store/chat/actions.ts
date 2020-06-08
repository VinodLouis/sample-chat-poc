export enum ChatActionTypes {
  LoadAllContact = '[Chat] Contact load',
  LoadCurrentUser = '[Chat] Set current user',
  LoadChatWithSingleUser = '[Chat] Load messages for single user',
  SendMessge = '[Chat] Send message',
}

export const LoadAllContact = () => ({
  type: ChatActionTypes.LoadAllContact,
  payload: null,
});

export const LoadChatWithSingleUser = (user: number) => ({
  type: ChatActionTypes.LoadChatWithSingleUser,
  payload: user,
});

export const LoadCurrentUser = (user: number) => ({
  type: ChatActionTypes.LoadCurrentUser,
  payload: user,
});

export const SendMessage = (message: string, fromId: number, toId: number) => ({
  type: ChatActionTypes.SendMessge,
  payload: { message, fromId, toId },
});
