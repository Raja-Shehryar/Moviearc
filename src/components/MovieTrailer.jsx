import React from "react";
import "./movieTrailer.css";
import Modal from "./Modal";
import { useState } from "react";

function MovieTrailer({ movie }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className={`trailer ${movie.active ? "active" : undefined}`}>
        <a href="#" className="playBtn" onClick={toggleModal}>
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && (
        <Modal movie={movie} status={modal} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default MovieTrailer;
