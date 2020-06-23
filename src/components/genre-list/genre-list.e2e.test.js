import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreList from './genre-list.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`The component interactivity`, () => {
  it(`Will choose current genre, if user click on it`, () => {
    const mockGenres = [`All genres`, `Crime`, `Horror`, `Comedies`];
    const mockCurrentGenre = `All genres`;
    const genreClickHandler = jest.fn();


    const genreList = mount(<GenreList
      allGenres = {mockGenres}
      currentGenre = {mockCurrentGenre}
      onGenreClick = {genreClickHandler}
    />);

    const genre = genreList.find(`.catalog__genres-link`).at(1);

    genre.simulate(`click`);

    expect(genreClickHandler).toHaveBeenCalledTimes(1);
    expect(genreClickHandler.mock.calls[0][0]).toEqual(`Crime`);
  });
});
