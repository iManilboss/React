import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=9bbcb83e';


const App = () =>{
const [movies,setMovies]=useState([]);
const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_KEY}&s = ${title}`);
        const data = await response.json();
        setMovies(data);
    }


    useEffect(()=>{
    searchMovies('Spiderman');
    },[]);


    return(
       
        <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
     

    );
}
export default App;