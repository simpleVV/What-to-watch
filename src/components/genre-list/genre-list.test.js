import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Genre list correctly renders with transferred mock genres`, () => {
    const mockGenres = [`All genres`, `Crime`, `Horror`];
    const mockCurrentGenre = `All genres`;

    const genreList = renderer
    .create(<GenreList
      allGenres = {mockGenres}
      currentGenre = {mockCurrentGenre}
      onGenreClick = {jest.fn}
    />)
      .toJSON();

    expect(genreList).toMatchSnapshot();
  });
});
