import MovieList from "components/MovieList";
import { useEffect, useState } from "react";
import { fetchTrand } from "services/api";

export default function Home() {
  const [trandMovies, setTrandMovies] = useState([])
  
  useEffect(() => {
    fetchTrand()
      .then(data => {
        const newTrandMovies = data.results
        setTrandMovies(prevTrandMovies => ([...prevTrandMovies,...newTrandMovies]))
      })
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
