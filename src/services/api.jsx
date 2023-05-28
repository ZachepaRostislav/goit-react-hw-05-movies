const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxMWUzMTM1ZTA4MjBiZmY1NjRlZjc3YzkyZmJkOSIsInN1YiI6IjY0NjhlZDFlMzNhMzc2MDEzYjNlMDNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RaO-facFZEvwOsjVTuUTczyNVOm3jOw5tiLAnVFDjYM'
  }
};


export const fetchTrand = () => {
  return fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`error ${response.status}`);
      }
      return response.json();
    })
}

export const fetchMovies = (query) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`error ${response.status}`);
      }
      return response.json();
    })
}

export const fetchDetails = (movieId) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`error ${response.status}`);
      }
      return response.json();
    })
}

export const fetchCast = (movieId) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`error ${response.status}`);
      }
      return response.json();
    })
}

export const fetchReviews = (movieId) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`error ${response.status}`);
      }
      return response.json();
    })
}