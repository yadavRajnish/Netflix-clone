import React, { useEffect, useState } from "react";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
// import Banner from "../Component/Banner";
import Slider from "../Component/Slider";
import axios from "axios";
import loader from "../images/Netflix_Loader.gif"
import Banner from "../Component/Banner";

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [top_rated, setTop_rated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [tvShow, setTVShow] = useState([]);
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  },[]);

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

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
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
        setTop_rated(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTUyYjg2YWVlMWU1ZjkzYTYyMjc5MmRjMjJiOWM1NiIsInN1YiI6IjY1NGY0MmRmMjg2NmZhMTA4ZmM4MGQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7i6a5DDcdqzc9eDySDtE4Z2PDKyenAYnvcFy4HW-6CU",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setUpComing(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTUyYjg2YWVlMWU1ZjkzYTYyMjc5MmRjMjJiOWM1NiIsInN1YiI6IjY1NGY0MmRmMjg2NmZhMTA4ZmM4MGQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7i6a5DDcdqzc9eDySDtE4Z2PDKyenAYnvcFy4HW-6CU",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTVShow(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTUyYjg2YWVlMWU1ZjkzYTYyMjc5MmRjMjJiOWM1NiIsInN1YiI6IjY1NGY0MmRmMjg2NmZhMTA4ZmM4MGQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7i6a5DDcdqzc9eDySDtE4Z2PDKyenAYnvcFy4HW-6CU'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        setPopular(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  },[])

// console.log(movies);
  return (
    <div className="bg-main">
    <Navbar />
    <Banner/>
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <img src={loader} alt="loader"/>
        </div>
      ) : (
        <>
          <Slider title={"Now playing"} array={nowPlaying} />
          <Slider title={"Popular on Netflix"} array={popular} />
          <Slider title={"Top rated movies"} array={top_rated} />
          <Slider title={"Upcoming movies"} array={upComing} />
          <Slider title={"Tv shows"} array={tvShow} />
          <Slider title={"Only movies on Netflix"} array={movies} />
        </>
      )}
    </div>
    <Footer />
  </div>
  );
};

export default Home;
