import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchQuery) {
      // If the search query is empty, do nothing
      return;
    }

    try {
      const response = await searchMovies(searchQuery);

      const results = response;
      console.log(results);

      if (results.length === 0) {
        // If there are no search results
        setNoResults(true);
        setSearchResults([]);
      } else {
        // If there are search results
        setNoResults(false);
        setSearchResults(results);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            query: query,
            language: "en-US",
            page: 1,
            include_adult: false,
          },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTUyYjg2YWVlMWU1ZjkzYTYyMjc5MmRjMjJiOWM1NiIsInN1YiI6IjY1NGY0MmRmMjg2NmZhMTA4ZmM4MGQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7i6a5DDcdqzc9eDySDtE4Z2PDKyenAYnvcFy4HW-6CU",
          },
        }
      );

      console.log("Request Headers:", response.config.headers);
      console.log("Response:", response.data);

      return response.data.results;
    } catch (error) {
      console.error("Error fetching search results:", error);
      throw error;
    }
  };

  const handleInputChange = async (event) => {
    setSearchQuery(event.target.value);

    if (event.target.value.trim() === "") {
      // Clear recommendations if input is empty
      setSearchResults([]);
      setNoResults(false);
      return;
    }

    try {
      const response = await searchMovies(event.target.value);
      const results = response;

      if (results.length === 0) {
        // If there are no search results
        setNoResults(true);
        setSearchResults([]);
      } else {
        // If there are search results
        setNoResults(false);
        setSearchResults(results);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <div className="search-container mt-5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Movies"
              value={searchQuery}
              onChange={handleInputChange}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>

          {noResults && <p>No results found.</p>}

          <ul className="autocomplete-list">
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <Link to={`/watch-movie/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchComponent;
