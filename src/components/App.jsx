
import { Routes, Route } from 'react-router-dom'
// components

import SharedLayout from './SharedLayout'

// pages
import Movies from 'pages/Movies'
import Home from 'pages/Home'
import MovieDetails from 'pages/MovieDetails'
import Cast from './Cast'
import ReviewsMovie from './ReviewsMovie'
// import MovieDetails from 'pages/MovieDetails'

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<ReviewsMovie />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
