import adaptFilms from './adapter.js';

describe(`The adapter works correctly`, () => {
  it(`the adapter correctly converts mock data`, () => {
    const mockFilms = {
      'id': 1,
      'genre': `Comedies`,
      'name': `Johnny English`,
      'preview_video_link': ``,
      'released': 2001,
      'run_time': 300,
      'preview_image': ``,
      'description': ``,
      'rating': 9,
      'scores_count': 1,
      'director': `Wes Andreson`,
      'starring': `Bill Murray`
    };

    expect(adaptFilms(mockFilms)).toEqual(
        {
          id: `1`,
          genre: `Comedies`,
          title: `Johnny English`,
          image: ``,
          preview: ``,
          details: {
            releaseDate: 2001,
            runTime: 300,
            bigPoster: ``,
            poster: undefined,
            description: ``,
            ratingLevel: `Very good`,
            ratingScore: `9`,
            ratingCount: 1,
            director: `Wes Andreson`,
            starring: `Bill Murray`
          },
          reviews: []
        }
    );
  });
});
