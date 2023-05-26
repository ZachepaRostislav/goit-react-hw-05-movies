
import MovieCard from 'components/MovieCard';
import { Suspense, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { fetchDetails } from 'services/api';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchDetails(movieId)
      .then(data => {
        const newMovieDetailsData = data
        setMovieDetails(prevMoviesDetails => ({
          ...prevMoviesDetails, ...newMovieDetailsData
        }))
      })
  }, [movieId])

  const backLink = location.state?.from ?? '/';
  return (
    <>
      <Link to={backLink}>Go Back</Link>
      <MovieCard movie={movieDetails} />
      <div>
        <NavLink to='cast' state={{ from: backLink }}>Cast</NavLink>
      </div>
      <div>
        <NavLink to='reviews' state={{ from: backLink }}>Reviews</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}
