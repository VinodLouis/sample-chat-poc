import React, { Component } from 'react';
import './ChatContactList.scss';

export interface ChatContactListProp {
  contacts: any;
  contactSelected: Function;
  withUserId: number;
}

class ChatContactList extends Component<ChatContactListProp> {
  render() {
    return (
      <div className="contact-list-card-wrapper">
        {this.props.contacts &&
          this.props.contacts.map((ec, i) => (
            <div
              key={i}
              className={`contact-list-card ${
                this.props.withUserId == ec.id ? 'active' : ''
              }`}
              onClick={() => this.props.contactSelected(ec)}
            >
              <div className="avatar">
                <span>{ec.name[0]}</span>
              </div>
              <div className="name">{ec.name}</div>
            </div>
          ))}
      </div>
    );
  }
}
export { ChatContactList };
export default ChatContactList;
