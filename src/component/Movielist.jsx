import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { fetchMovies } from "../store/MovieSlice";
import { STATUES } from "../store/MovieSlice";
import { add } from "../store/WatchSlice";

const Movielist = () => {
  const dispatch = useDispatch();
  const { movie: movie, status } = useSelector((state) => state.movie);
  const movieWatchlist = useSelector((state)=> state.watchlist)

  const IMG_URL = "https://image.tmdb.org/t/p/w780/";

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);



  const handleAdd = (movieData) => {
    if(movieWatchlist.some((m) => m.id === movieData.id)){
        return
    }
    dispatch(add(movieData))
  };

  if (status === STATUES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUES.ERROR) {
    return <h2>Something Went Wrong...</h2>;
  }

  return (
    <>
      <Navbar />
      <div
        className="movielist background-image"
        style={{
          background: movie.length > 0 ? `url(${IMG_URL}${movie[0].backdrop_path})` : "",
        }}
      >
        { movie.map((m, index) => {
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
              <button onClick={()=>handleAdd(m)}>Add to WatchList</button>
            </div>
          </div>
          )
        })}
      </div>
    </>
  );
};

export default Movielist;
