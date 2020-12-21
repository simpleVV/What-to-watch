import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignIn from './sign-in.jsx';

Enzyme.configure({adapter: new Adapter()});

const loginHandler = jest.fn();

describe(`The component interactivity`, () => {
  it(`Calls callback when user submit from`, () => {
    const signIn = mount(
        <SignIn
          login = {loginHandler}
        />
    );

    const signInForm = signIn.find(`.sign-in__form`);

    signInForm.simulate(`submit`, (evt) => {
      evt.preventDefault();
    });

    expect(loginHandler).toHaveBeenCalledTimes(1);
    expect(loginHandler.mock.calls[0][0]).toEqual({
      email: ``,
      password: ``
    });
  });
});
