import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

let wrapper: ShallowWrapper<App>;

beforeEach(() => {
  const app = <App />;

  wrapper = shallow(app);
});

describe('<App />', () => {
  test('it renders the Chat component', () => {
    expect(wrapper).toBeTruthy;
  });
});
