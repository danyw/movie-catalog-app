import React, { useState } from 'react'
import CardImage from './Card'
// import './CardContainer.css'

function CardContainer() {
  const [movies, setMovies] = useState([
    'movies1',
    'movie2',
    'movie3',
    'movie4',
  ])
  return (
    <div
      style={{
        margin: '20px 20px',
      }}
    >
      <h2>List of Movies</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        {movies.map((m, index) => (
          <CardImage key={index} movies={m} />
        ))}
      </div>
    </div>
  )
}

export default CardContainer
