import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/api";
import { ReviewsMovieList, ReviewsMovieListAuthor, ReviewsMovieListContent, ReviewsMovieListItem } from "./ReviewsMovie.styled";


export default function ReviewsMovie() {
  const [reviewsMovie, setReviewsMovie] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    fetchReviews(movieId)
      .then(data => {
        const newReviewsMovie = data.results
        setReviewsMovie(newReviewsMovie)
      })
  }, [movieId])

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
