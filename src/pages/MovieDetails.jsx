
import MovieCard from 'components/MovieCard';
import { Suspense, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxMWUzMTM1ZTA4MjBiZmY1NjRlZjc3YzkyZmJkOSIsInN1YiI6IjY0NjhlZDFlMzNhMzc2MDEzYjNlMDNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RaO-facFZEvwOsjVTuUTczyNVOm3jOw5tiLAnVFDjYM'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        const newMovieDetailsData = data
        setMovieDetails(prevMoviesDetails => ({
          ...prevMoviesDetails, ...newMovieDetailsData
        }))
      })
      .catch(err => console.error(err));
  }, [movieId])
  const backLink = location.state?.from ?? '/';
  return (
    <>
      <Link to={backLink}>Go Back</Link>
      <MovieCard movie={movieDetails} />
      <div>
        <NavLink to='cast' state={{ from: backLink }}>Cast</NavLink>
        <NavLink to='reviews' state={{ from: backLink }}>Reviews</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}
