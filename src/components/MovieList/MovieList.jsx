import { useLocation } from "react-router-dom"
import PropTypes from "prop-types";
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};