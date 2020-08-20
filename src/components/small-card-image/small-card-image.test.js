import React from 'react';
import renderer from 'react-test-renderer';

import SmallCardImage from './small-card-image.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Video player correctly renders with transferred mock data`, () => {
    const videoPlayer = renderer
    .create(
        <SmallCardImage
          renderVideo = {jest.fn()}
        />
    )
    .toJSON();

    expect(videoPlayer).toMatchSnapshot();
  });
});
