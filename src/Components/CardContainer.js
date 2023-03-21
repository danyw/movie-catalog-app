import React, { useEffect, useState } from "react";
import CardImage from "./Card";
import "../Styles/cardContainer.css";

function CardContainer({ movies, updateMovies }) {
  useEffect(() => {
    console.log(movies);
  }, [movies]);
  return (
    <div
      style={{
        margin: "2rem auto 2rem auto",
      }}
    >
      <div
        className="cardContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {movies.map((m, index) => (m.poster_path !== null ? <CardImage key={index} movies={m} /> : null))}
        {/* skiping movies with no poster for better experience */}
      </div>
    </div>
  );
}

export default CardContainer;
