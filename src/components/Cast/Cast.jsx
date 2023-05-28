import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchCast } from "services/api";
import { CastImg, CastItem, CastList, CastText } from "./Cast.styled";


export default function Cast() {
  const [castMovie, setCastMovie] = useState([])
  const { movieId } = useParams()
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const plug = "https://dummyimage.com/600x400/d9d9d9/fff.png";

  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        setCastMovie(data.cast)
      })
  }, [movieId])

  return (
    <CastList>
      {castMovie.length === 0 && <p>Sorry, we don't have any cast on this movie</p>}
      {castMovie.map(({ id, profile_path, original_name, character }) =>
        <CastItem key={id} >
          <CastImg src={profile_path ?
            imgBaseUrl.concat(profile_path) : plug} alt={original_name} />
          <CastText>{original_name}</CastText>
          <CastText>{character}</CastText>
        </CastItem>)}
    </CastList>
  )
}
