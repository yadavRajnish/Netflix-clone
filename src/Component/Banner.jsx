import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",

      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTUyYjg2YWVlMWU1ZjkzYTYyMjc5MmRjMjJiOWM1NiIsInN1YiI6IjY1NGY0MmRmMjg2NmZhMTA4ZmM4MGQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7i6a5DDcdqzc9eDySDtE4Z2PDKyenAYnvcFy4HW-6CU",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setNowPlaying(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const highRatedMovies = nowPlaying.filter(
    (movie) => movie.vote_average > 8.5
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    dotsClass: "slick-dots", // Specify the class for custom styling
    customPaging: function (i) {
      return (
        <div
          className="slick-dot"
          style={{
            width: "10px",
            height: "10px",
            background: "#fff", // Change the background color to white
            borderRadius: "50%",
          }}
        ></div>
      );
    },
  };

  return (
    <div className="bg-main">
      <Slider {...settings}>
        {highRatedMovies.map((movie) => (
          <div key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full max-h-70vh object-cover"
              style={{ maxHeight: "75vh" }}
            />
            <div className="absolute z-50 bottom-12 left-12 text-left">
              <h1 className="text-white text-4xl font-bold mb-2">
                {movie.original_title}
              </h1>
              {/* Watch Now button */}
              <Link to={`/watch-movie/${movie.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                  Watch Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
