import { useLocation } from "react-router-dom"
import { MovieCatalog, MovieListImg, MovieListItem, MovieListNavLink, MovieListParagraph } from "./MovieList.styled";


export default function MovieList({ movies }) {
  const location = useLocation()
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <MovieCatalog>
      {movies.length === 0 && <p>No movies found.</p>}
      {movies.map((movie, index) => (
        <MovieListItem key={index} >
          <MovieListNavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieListParagraph> {movie.original_name ?? movie.title}</MovieListParagraph></MovieListNavLink>
          <MovieListImg src={imgBaseUrl.concat(movie.poster_path)} alt={movie.original_name ?? movie.title} />
        </MovieListItem>
      ))
      }
    </MovieCatalog >
  )
}
