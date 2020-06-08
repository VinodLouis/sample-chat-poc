import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SendMessage } from '../../store/chat/actions';
import { rootState } from '../../store/index';
import './ChatMessage.scss';

export interface ChatMessageProp {
  sendMessage?: typeof SendMessage;
  withUserId: number;
  chat?: any;
  thisUser?: number;
  currUserDetails?: any;
}

export const mapStateToProps = (state: rootState) => ({
  chat: state.chat.chats,
  thisUser: state.chat.currUser,
  currUserDetails: state.chat.currUserDetails,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: (message: string, fromId: number, toId: number) =>
    dispatch(SendMessage(message, fromId, toId)),
});

class ChatMessage extends Component<ChatMessageProp> {
  public state;
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  change(ev: any) {
    this.setState({ message: ev.currentTarget.value });
  }

  getInitialState = () => ({
    message: '',
  });

  save() {
    this.props.sendMessage(
      this.state.message,
      this.props.thisUser,
      this.props.withUserId
    );
    setTimeout(() => this.setState({ message: '' }), 0);
  }

  render() {
    return (
      <div className="chat">
        {this.props.currUserDetails && this.props.currUserDetails.name && (
          <div className="header">
            <div className="avatar">
              <span>{this.props.currUserDetails.name[0]}</span>
            </div>
            <div className="name">{this.props.currUserDetails.name}</div>
          </div>
        )}
        <div className="message-card-wrapper">
          {this.props.chat &&
            this.props.chat.map((em: any, i) => (
              <div
                className={`message-wrapper ${
                  em.sender == this.props.thisUser ? 'send' : 'received'
                } `}
                key={i}
              >
                <div className="message">{em.message}</div>
                <div className="details">{moment(em.dt).fromNow()}</div>
              </div>
            ))}
        </div>
        <div className="controls">
          <textarea
            value={this.state.message}
            onChange={this.change.bind(this)}
          ></textarea>
          {this.state.message && (
            <button className="save" onClick={this.save.bind(this)}>
              &gt;
            </button>
          )}
        </div>
      </div>
    );
  }
}

export { ChatMessage };
export default connect(mapStateToProps, mapDispatchToProps)(ChatMessage);
