import React, { useEffect, useState } from "react";
import "./Row.scss";
import axios from "../axios/axios";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    async function GetImages() {
      const response = await axios.get(fetchUrl);
      setMovie(response.data.results);
      return response;
    }
    GetImages();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="allImages">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="image"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
