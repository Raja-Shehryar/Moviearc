import React, { useEffect, useState } from "react";
import "./banner.css";
import bgimage from "../images/bg-transformer.jpg";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import MovieTrailer from "../components/MovieTrailer";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((eror) => console.log(eror.message));
  };
  const handleSlideChange = (id) => {
    console.log(id);
    const newMovies = movies.map((movie) => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie">
            <img
              src={movie.bgImg}
              alt="Background Image"
              className={`bgImg ${movie.active ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12 ">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12 ">
                  <MovieDate movie={movie} />
                  <MovieTrailer movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 ? (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      ) : null}
      {/* <MovieSwiper /> */}
    </div>
  );
}

export default Banner;
