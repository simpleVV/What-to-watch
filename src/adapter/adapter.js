const adaptFilms = (data) => {
  return {
    id: `${data.id}`,
    genre: data.genre,
    title: data.name,
    image: data.preview_image,
    preview: data.preview_video_link,
    details: {
      releaseDate: data.released,
      runTime: data.run_time,
      bigPoster: data.preview_image,
      poster: data.poster_image,
      description: data.description,
      ratingLevel: `Very good`,
      ratingScore: `${data.rating}`,
      ratingCount: data.scores_count,
      director: data.director,
      starring: data.starring
    },
    reviews: []
  };
};

export default adaptFilms;
