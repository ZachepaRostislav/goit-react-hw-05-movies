
import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy } from 'react'
// components
import SharedLayout from './SharedLayout'
// pages
import Home from 'pages/Home'
import MovieDetails from 'pages/MovieDetails'

const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./ReviewsMovie'));
export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </>
  )
}
