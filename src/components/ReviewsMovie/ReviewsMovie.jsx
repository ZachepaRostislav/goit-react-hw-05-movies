import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { ReviewsMovieList, ReviewsMovieListAuthor, ReviewsMovieListContent, ReviewsMovieListItem } from "./ReviewsMovie.styled";


export default function ReviewsMovie() {
  const [reviewsMovie, setReviewsMovie] = useState([])
  const { movieId } = useParams()
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxMWUzMTM1ZTA4MjBiZmY1NjRlZjc3YzkyZmJkOSIsInN1YiI6IjY0NjhlZDFlMzNhMzc2MDEzYjNlMDNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RaO-facFZEvwOsjVTuUTczyNVOm3jOw5tiLAnVFDjYM'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(data => {
        const newReviewsMovie = data.results
        setReviewsMovie(newReviewsMovie)

      })
      .catch(err => console.error(err));
  })
  return (
    <ReviewsMovieList>
      {reviewsMovie.length === 0 && <p>No Reviews</p>}
      {reviewsMovie.map(({ id, author, content }) => (
        <ReviewsMovieListItem key={id}>
          <ReviewsMovieListAuthor>{author}</ReviewsMovieListAuthor>
          <ReviewsMovieListContent>{content}</ReviewsMovieListContent>
        </ReviewsMovieListItem>
      ))}
    </ReviewsMovieList>
  )
}
