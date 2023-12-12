import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaRegPlayCircle, FaRegWindowClose } from "react-icons/fa";

const WatchMovie = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isPlayClicked, setIsPlayClicked] = useState(false);


console.log(movieId);


  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTUyYjg2YWVlMWU1ZjkzYTYyMjc5MmRjMjJiOWM1NiIsInN1YiI6IjY1NGY0MmRmMjg2NmZhMTA4ZmM4MGQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7i6a5DDcdqzc9eDySDtE4Z2PDKyenAYnvcFy4HW-6CU",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovieDetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);

  const playVideo = () => {
    setIsPlayClicked(true);
  };

  const stopVideo = () => {
    setIsPlayClicked(false);
  };

  return (
    <div className="relative container mx-auto">
      <div className="relative">
        {movieDetails && (
          <div className="bg-gray-800 rounded-md shadow-md overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="object-cover w-full"
              style={{
                height: "120vh",
                objectPosition: "20% 20%",
                objectFit: "cover",
              }}
            />
            {!isPlayClicked && (
              <div
                className="cursor-pointer absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={playVideo}
              >
                <FaRegPlayCircle className="text-white text-8xl" />
              </div>
            )}
          </div>
        )}

        {isPlayClicked && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute top-4 right-4">
              <FaRegWindowClose
                className="text-red-500 text-2xl cursor-pointer"
                onClick={stopVideo}
              />
            </div>
            <iframe
              style={{
                height: "80vh",
                width: "90vw",
                zIndex: "1",
                transform: "translateY(-15%)",
              }}
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/cKHdtzMH6gY?si=zrgUzchGoNvsH_jr"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {movieDetails && (
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-black bg-opacity-50 text-red-500">
          <h2 className="text-3xl font-bold mb-4">{movieDetails.title}</h2>
          <p className="text-white mb-4">
            Release Date : {movieDetails.release_date}
          </p>
          <p className="text-text mb-4">{movieDetails.overview}</p>
          <div className="flex gap-2 mt-2 ">
            {movieDetails.spoken_languages.map((element, index) => (
              <React.Fragment key={index}>
                <p className="text-white">{element.name}</p>
                {index < movieDetails.spoken_languages.length - 1 && (
                  <span className="text-white">,</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchMovie;
