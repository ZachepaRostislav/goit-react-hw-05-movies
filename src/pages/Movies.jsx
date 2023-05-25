import MovieList from "components/MovieList";
import { useEffect, useState } from "react";
import { fetchMovies } from "services/api"
export default function Movies() {
  // const movies = fetchMovies()
  // useEffect(() => {
  //   fetch!!!
  // })
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([])

  const handleSearchMovieName = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.elements.search.value
    setMovieName(input)

  }
  useEffect(() => {

    fetchMovies(movieName).then(data => {
      const newMovies = data.results
      if (movieName === '') {
        return
      }

      setMovies(prevMovies => [...prevMovies, ...newMovies]);
    })
  }, [movieName])
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
