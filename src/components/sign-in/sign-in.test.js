import React from 'react';
import renderer from 'react-test-renderer';

import SignIn from './sign-in.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Sign in component correctly renders`, () => {
    const signIn = renderer
    .create(
        <SignIn
          login = {jest.fn()}
        />
    )
    .toJSON();

    expect(signIn).toMatchSnapshot();
  });
});
