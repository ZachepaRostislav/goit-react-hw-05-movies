import MovieList from "components/MovieList";
import { useEffect, useState } from "react";



export default function Home() {
  const [trandMovies, setTrandMovies] = useState([])
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxMWUzMTM1ZTA4MjBiZmY1NjRlZjc3YzkyZmJkOSIsInN1YiI6IjY0NjhlZDFlMzNhMzc2MDEzYjNlMDNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RaO-facFZEvwOsjVTuUTczyNVOm3jOw5tiLAnVFDjYM'
      }
    };

    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(response => response.json())
      .then(data => {
        const newTrandMovies = data.results
        setTrandMovies(prevTrandMovies => ([...prevTrandMovies,...newTrandMovies]))
      })
      .catch(err => console.error(err));
  },[])
  
  return (
    <>
      <h1>Home </h1>
      <MovieList movies={ trandMovies} />
    </>
    
    
  )
}




 
  

//   return (
//     <>
     
//       {/* <MovieDetails movies={movies}></MovieDetails> */}
//     </>
//   )
// }
