import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { remove } from "../store/WatchSlice";

const Watchlist = () => {
  const dispatch = useDispatch();
  const movieWatchlist = useSelector((state) => state.watchlist);

  const IMG_URL = "https://image.tmdb.org/t/p/w780/";

  const handleRemove = (movieData) => {
    const filteredList = movieWatchlist.filter((m) => m.id !== movieData.id);
    dispatch(remove(filteredList));
  };

  return (
    <>
      <Navbar />
      <div
        className="movielist background-image"
        style={{
          background:
            movieWatchlist.length > 0
              ? `url(${IMG_URL}${movieWatchlist[0].backdrop_path})`
              : "",
        }}
      >
        {movieWatchlist.map((m, index) => {
          return (
            <div className="Movie" key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/movielist/${m.id}`}
              >
                <div className="image-container">
                  <img
                    src={`${IMG_URL}${m.backdrop_path}`}
                    alt="movielogo"
                    className="image"
                  />
                </div>
              </Link>
              <div className="movieinfo">
                <h2 className="moviename">{m.title}</h2>
                <p classname="averagevote">Avg. vote:- {m.vote_average}</p>
                <p className="releasedate">Release Date:- {m.release_date}</p>
                <button onClick={() => handleRemove(m)}>
                  Remove from WatchList
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/movielist">MovieList</Link>
    </>
  );
};

export default Watchlist;
