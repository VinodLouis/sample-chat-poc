import { combineReducers, Reducer } from 'redux';
import chatReducer from './chat/reducer';
import { ChatState } from './chat/types';

// The top-level state object
export interface rootState {
  chat: ChatState;
}

export const rootReducer: Reducer<rootState> = combineReducers<rootState>({
  chat: chatReducer
});
