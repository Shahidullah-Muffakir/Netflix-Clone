import React from "react";

import "./Homescreen.scss";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../axios/requests";

const Homescreen = () => {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row title="NETFLIX TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="MOST POPULAR" fetchUrl={requests.fetchPopular} />
      <Row title="UPCOMING" fetchUrl={requests.fetchUpcoming} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
    </div>
  );
};

export default Homescreen;
