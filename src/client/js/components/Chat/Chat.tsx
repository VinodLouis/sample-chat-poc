import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  LoadAllContact,
  LoadCurrentUser,
  LoadChatWithSingleUser,
} from '../../store/chat/actions';
import { rootState } from '../../store/index';
import ChatContactList from '../ChatContactList/ChatContactList';
import ChatMessage from '../ChatMessage/ChatMessage';
import './Chat.scss';

export interface ChatProps {
  loadAllContact?: typeof LoadAllContact;
  loadChatWithSingleUser?: typeof LoadChatWithSingleUser;
  contacts?: any;
  withUser?: number;
}

export const mapStateToProps = (state: rootState) => ({
  withUser: state.chat.withUser,
  contacts: state.chat.contacts,
});

export const mapDispatchToProps = (dispatch) => ({
  loadAllContact: () => dispatch(LoadAllContact()),
  loadChatWithSingleUser: (id) => dispatch(LoadChatWithSingleUser(id)),
});

class Chat extends Component<ChatProps> {
  public state;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadAllContact();
    this.props.loadChatWithSingleUser(1);
  }

  contactSelectionChanged(dt) {
    this.props.loadChatWithSingleUser(dt.id);
  }

  render() {
    return (
      <div className="chat-container">
        <div className="contact-list">
          <ChatContactList
            withUserId={this.props.withUser}
            contactSelected={this.contactSelectionChanged.bind(this)}
            contacts={this.props.contacts}
          ></ChatContactList>
        </div>
        <div className="chat-window">
          <ChatMessage withUserId={this.props.withUser}></ChatMessage>
        </div>
      </div>
    );
  }
}

export { Chat };
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
