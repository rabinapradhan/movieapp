import React, { useState, useEffect } from "react";
import axios from "axios";
import NowPlaying from "./nowPlaying";
import PopularMovies from "./popularMovies";
import TopRated from "./topRatedMovies";
import { HomeWrapper } from "./style";
export default function HomePage() {
  const [nowPlaying, setnowPlaying] = useState([{}]);
  const [topRated, settopRated] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);

  //Create a new function
  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    let apiKey = "9190e4c097577c6ffc706d8a743f8f99";
    const allMovies = await axios.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      ),
    ]);
    setnowPlaying(allMovies[0].data.results);
    settopRated(allMovies[1].data.results);
    setpopularMovies(allMovies[2].data.results);
  };

  return (
    <HomeWrapper>
      <NowPlaying movie={nowPlaying} />
      <PopularMovies movie={popularMovies} />
      <TopRated movie={topRated} />
    </HomeWrapper>
  );
}
