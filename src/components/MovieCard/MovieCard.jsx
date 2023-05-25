import { Block, MovieCardBlock, MovieCardDateRelease, MovieCardDescription, MovieCardImg, MovieCardName, MovieCardText } from "./MovieCard.styled";

export default function MovieCard({ movie }) {
  const { title, release_date
    , poster_path, vote_average
    , overview
    , genres = [] } = movie
  console.log(genres)
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
