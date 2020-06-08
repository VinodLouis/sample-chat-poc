import moment from 'moment';
import { escapeLeadingUnderscores } from 'typescript';

let dt = new Date();

export const chats = [
  {
    id: moment().unix(),
    message: 'Hi',
    sender: 4,
    receiver: 1,
    dt: moment()
      .subtract(50, 'minutes')
      .toDate(),
  },
  {
    id: moment().unix(),
    message: 'Hello',
    sender: 1,
    receiver: 4,
    dt: moment()
      .subtract(48, 'minutes')
      .toDate(),
  },
  {
    id: moment().unix(),
    message: 'How are you',
    sender: 4,
    receiver: 1,
    dt: moment()
      .subtract(45, 'minutes')
      .toDate(),
  },
  {
    id: moment().unix(),
    message: 'Im good how aboout you ?',
    sender: 1,
    receiver: 4,
    dt: moment()
      .subtract(42, 'minutes')
      .toDate(),
  },
];

export const contacts = [
  {
    name: 'Dhruma Mehta',
    id: 1,
    chats: chats.filter((el: any) => el.sender == 1 || el.receiver == 1),
  },
  {
    name: 'Sohil Desai',
    id: 2,
    chats: chats.filter((el: any) => el.sender == 2 || el.receiver == 2),
  },
  {
    name: 'Milind Kolte',
    id: 3,
    chats: chats.filter((el: any) => el.sender == 3 || el.receiver == 3),
  },
  {
    name: 'Vinod Louis',
    id: 4,
    chats: chats.filter((el: any) => el.sender == 4 || el.receiver == 4),
  },
];

export const pushMessage = (m: string, f: number, t: number) => {
  let objChat = {
    id: moment().unix(),
    message: m,
    sender: f,
    receiver: t,
    dt: moment().toDate(),
  };

  chats.push(objChat);

  contacts
    .filter((el) => el.id == f || el.id == t)
    .forEach((ea) => ea.chats.push(objChat));
};
