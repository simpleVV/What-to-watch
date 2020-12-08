import NameSpace from '../name-space.js';

export const getFilms = (state) => state[NameSpace.DATA].fullFilmList;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
