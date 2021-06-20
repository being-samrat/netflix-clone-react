import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        isLargePoster
        fetchUrl={requests.getNetFlixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.getTrending} />
      <Row title="Top Rated" fetchUrl={requests.getTopRated} />
      <Row title="All Movies" fetchUrl={requests.getAllMovies} />
      <Row title="Action Movies" fetchUrl={requests.getActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.getComedyMovies} />
    </div>
  );
}

export default App;
