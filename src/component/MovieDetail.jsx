import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const MovieDetail = ({}) => {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  const IMG_URL = "https://image.tmdb.org/t/p/w780/";

  useEffect(() => {
    movieInfo();
  }, []);

  const movieInfo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=34142515d9d23817496eeb4ff1d223d0&language=en`
      )
      .then((infodata) => {
        setMovieDetail(infodata.data);
      });
  };
  const close = () => {
    navigate("/movielist")
  }
  return (
    <div
      className="Moviedetail background-image"
      style={{
        background: `url(${IMG_URL}${movieDetail.backdrop_path})`
      }}
    >
      <div className="movie-image-contaiener">
        <button className="close-btn" onClick={close}>X</button>
        <img src={`${IMG_URL}${movieDetail.poster_path}`} className="image" />
      </div>
      <div className="movieinfo">
        <h2 className="moviename">{movieDetail.title}</h2>
        <p className="averagevote">Avg. vote:- {movieDetail.vote_average}</p>
        <p className="releasedate">Release Date:- {movieDetail.release_date}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
