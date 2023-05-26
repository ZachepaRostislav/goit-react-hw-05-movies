import PropTypes from "prop-types";
import { Block, MovieCardBlock, MovieCardDateRelease, MovieCardDescription, MovieCardImg, MovieCardName, MovieCardText } from "./MovieCard.styled";

export default function MovieCard({ movie }) {
  const { title, release_date
    , poster_path, vote_average
    , overview
    , genres = [] } = movie

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const genresList = genres
    .map(genre => genre.name)
    .join(', ');

  return (
    <MovieCardBlock>
      <MovieCardImg src={imgUrl} alt={title} />
      <Block>
        <MovieCardName>{title} </MovieCardName>
        <MovieCardDateRelease>Release date: {release_date}</MovieCardDateRelease>
        <MovieCardDescription>User score: <MovieCardText> {vote_average}</MovieCardText></MovieCardDescription>
        <MovieCardDescription>Overview: <MovieCardText>{overview}</MovieCardText></MovieCardDescription>
        <MovieCardDescription>Genres <MovieCardText>{genresList}</MovieCardText></MovieCardDescription>
      </Block>
    </MovieCardBlock>
  )
}


MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};