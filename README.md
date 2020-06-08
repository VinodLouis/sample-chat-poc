# NOTE

The App is a simple chat window application where it meet the basic two goals

1. The user should be able to write messages in the chat window and see them appear.
2. The user should be able to select a friend and see his chat with this friend.

# Simple Chat POC

Technologies used

- React
- Redux
- Jest
- Enzyme
- Webpack
- scss
- Typescript

Dev Set up:

1.  Got to root and execute command `npm install`

Running Dev:

1.  run `npm run start-client` (This will start the client)
2.  Application should be accessible at http://localhost:8080

Test Cases

1.  `npm run test:jest` will run the unit test cases

ToDo:

1.  Test coverage could be improve
2.  Some trivial code can be optimized
3.  UX is very primilary for now
4.  Integration with a backend

Flow:

1. Its preassumed there are 4 users overall. Few messages are loaded by default. The context user is assumed as user with id 4 in [initial state](https://github.com/VinodLouis/sample-chat-poc/blob/master/src/client/js/store/chat/reducer.ts#L20).

2. Also the chat window opens with a [default partner](https://github.com/VinodLouis/sample-chat-poc/blob/master/src/client/js/store/chat/reducer.ts#L20)

3. The messages for now are stubbed in [local file](https://github.com/VinodLouis/sample-chat-poc/blob/master/src/client/js/stub/stub.tsx)
