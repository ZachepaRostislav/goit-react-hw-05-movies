import MovieList from "components/MovieList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "services/api"


export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    fetchMovies(query).then(data => {
      if (!query) {
        return
      }
      setMovies(data.results);
    })
  }, [query])

  const handleSearchMovieName = (e) => {
    e.preventDefault()
    const query = e.target.search.value.toLowerCase().trim()
    if (!query) {
      return
    }
    setSearchParams({ query })
  }
  return (
    <>
      <h1>Movies</h1>
      <form onSubmit={handleSearchMovieName}>
        <input type="text" name="search" placeholder="Enter your movie" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  )
}
