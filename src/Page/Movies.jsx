import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTUyYjg2YWVlMWU1ZjkzYTYyMjc5MmRjMjJiOWM1NiIsInN1YiI6IjY1NGY0MmRmMjg2NmZhMTA4ZmM4MGQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7i6a5DDcdqzc9eDySDtE4Z2PDKyenAYnvcFy4HW-6CU",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-main">
      <Navbar />

      <div className="container mx-auto p-6 bg-main text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">All Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies?.map((movie) => (
            <div key={movie.id} className="movie-item">
              <Link to={`/watch-movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-md transition transform hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Movies;
