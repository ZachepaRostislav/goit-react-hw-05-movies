export const fetchMovies = (movieName) => {
  return fetch(

    `https://api.themoviedb.org/3/search/movie?api_key=ade11e3135e0820bff564ef77c92fbd9&query=${movieName}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`error ${response.status}`);
      }
      return response.json();
    })

}
