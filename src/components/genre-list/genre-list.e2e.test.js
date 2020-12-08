import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreList from './genre-list.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockGenres = [`All genres`, `Crime`, `Horror`, `Comedies`];

describe(`The component interactivity`, () => {
  it(`Will choose current genre, if user click on it`, () => {
    const genreClickHandler = jest.fn();
    const itemActiveHandler = jest.fn();
    const genreList = mount(<GenreList
      allGenres = {mockGenres}
      currentGenre = {`All genres`}
      onGenreClick = {genreClickHandler}
      onItemActivate = {itemActiveHandler}
    />);

    const genre = genreList.find(`.catalog__genres-link`).at(1);

    genre.simulate(`click`);

    expect(genreClickHandler).toHaveBeenCalledTimes(1);
    expect(genreClickHandler.mock.calls[0][0]).toEqual(`Crime`);
  });

  it(`Will activate item, if user click on it`, () => {
    const genreClickHandler = jest.fn();
    const itemActiveHandler = jest.fn();
    const genreList = mount(<GenreList
      allGenres = {mockGenres}
      currentGenre = {`Horror`}
      onGenreClick = {genreClickHandler}
      onItemActivate = {itemActiveHandler}
    />);

    const genre = genreList.find(`.catalog__genres-link`).at(2);

    genre.simulate(`click`);

    expect(itemActiveHandler).toHaveBeenCalledTimes(1);
    expect(itemActiveHandler.mock.calls[0][0]).toEqual(`Horror`);
  });
});
