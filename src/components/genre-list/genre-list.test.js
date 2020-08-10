import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';

const mockGenres = [`All genres`, `Crime`, `Horror`];

describe(`The component is rendered correctly`, () => {
  it(`Genre list correctly renders with transferred mock genres`, () => {
    const genreList = renderer
    .create(<GenreList
      allGenres = {mockGenres}
      onGenreClick = {jest.fn()}
      onItemActivate = {jest.fn()}
      activeItem = {`All genres`}
    />)
      .toJSON();

    expect(genreList).toMatchSnapshot();
  });
});
