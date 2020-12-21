import React from 'react';
import renderer from 'react-test-renderer';

import {Header} from './header.jsx';

const mockComponent = <div></div>;
const mockUserInfo = {
  'id': 1,
  'email': `bob@mail.ru`,
  'name': `bob`,
  'avatar_url': `img\avatar.jpg`
};

describe(`The component is rendered correctly`, () => {
  it(`Header correctly renders with transferred mock children and user info`, () => {
    const header = renderer
    .create(
        <Header
          userInfo = {mockUserInfo}
        >
          {mockComponent}
        </Header>
    )
    .toJSON();

    expect(header).toMatchSnapshot();
  });
});
