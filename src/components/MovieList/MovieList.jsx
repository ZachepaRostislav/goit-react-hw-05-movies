import { useLocation } from "react-router-dom"
import PropTypes from "prop-types";
import { MovieCatalog, MovieListImg, MovieListItem, MovieListNavLink, MovieListParagraph } from "./MovieList.styled";


export default function MovieList({ movies }) {
  const location = useLocation()
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const plug = "https://dummyimage.com/600x400/d9d9d9/fff.png";

  return (
    <MovieCatalog>
      {movies.length === 0 && <p>No movies found.</p>}
      {movies.map(({ id, original_name, title, poster_path }) => (
        <MovieListItem key={id} >
          <MovieListNavLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieListParagraph> {original_name ?? title}</MovieListParagraph></MovieListNavLink>
          <MovieListImg src={poster_path ?
            imgBaseUrl.concat(poster_path) : plug} alt={original_name ?? title} />
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
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};