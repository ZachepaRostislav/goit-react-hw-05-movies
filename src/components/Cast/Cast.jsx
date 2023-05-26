import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchCast } from "services/api";
import { CastImg, CastItem, CastList, CastText } from "./Cast.styled";


export default function Cast() {
  const [castMovie, setCastMovie] = useState([])
  const { movieId } = useParams()
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        const newCastMovie = data.cast
        setCastMovie(prevCastMovie => ([...prevCastMovie, ...newCastMovie]))
      })
  }, [movieId])

  return (
    <CastList>
      {castMovie.length === 0 && <p>Sorry, we don't have any cast on this movie</p>}
      {castMovie.map((cast, index) =>
        <CastItem key={index} >
          <CastImg src={imgBaseUrl.concat(cast.profile_path)} alt={cast.original_name} />
          <CastText>{cast.original_name}</CastText>
          <CastText>{cast.character}</CastText>
        </CastItem>)}
    </CastList>
  )
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};