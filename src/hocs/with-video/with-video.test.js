import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

import withVideo from './with-video.js';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

describe(`The component with video is rendered correctly`, () => {
  it(`With video correctly renders`, () => {
    const MockComponentWrapped = withVideo(MockComponent);

    const mockComponentWrapped = renderer
    .create(
        <MockComponentWrapped
          isPlaying = {false}
          style = {{width: `100%`, height: `100%`, objectFit: `fill`}}
        />
    )
    .toJSON();

    expect(mockComponentWrapped).toMatchSnapshot();
  });
});
