import React, { useState, useEffect } from "react";
import requests from "../axios/requests";
import "./Banner.scss";
import axios from "../axios/axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      //from our axios(axios.js file) that is having the tmdb base url we are geting the data i.e, sending requests
      const response = await axios.get(requests.fetchTrending);

      //changing the state of movie to the response's movie(random movie)
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  //cute the text from the index 0 to index n-1
  const Truncate = (string, n) => {
    return string?.length > 0 ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{Truncate(movie?.overview, 100)}</p>
      </div>
    </header>
  );
};

export default Banner;
