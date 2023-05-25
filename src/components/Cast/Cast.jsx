import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { CastImg, CastItem, CastList, CastText } from "./Cast.styled";


export default function Cast() {
  const [castMovie, setCastMovie] = useState([])
  const { movieId } = useParams()
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxMWUzMTM1ZTA4MjBiZmY1NjRlZjc3YzkyZmJkOSIsInN1YiI6IjY0NjhlZDFlMzNhMzc2MDEzYjNlMDNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RaO-facFZEvwOsjVTuUTczyNVOm3jOw5tiLAnVFDjYM'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        const newCastMovie = data.cast
        setCastMovie(prevCastMovie => ([...prevCastMovie, ...newCastMovie]))

      })
      .catch(err => console.error(err));
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
