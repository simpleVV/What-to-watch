import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';

const mockGenres = [`All genres`, `Crime`, `Horror`];
const mockCurrentGenre = `All genres`;

describe(`The component is rendered correctly`, () => {
  it(`Genre list correctly renders with transferred mock genres`, () => {
    const genreList = renderer
    .create(<GenreList
      allGenres = {mockGenres}
      onGenreClick = {jest.fn()}
      onItemActivate = {jest.fn()}
      activeItem = {mockCurrentGenre}
    />)
      .toJSON();

    expect(genreList).toMatchSnapshot();
  });
});
