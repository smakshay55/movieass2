import React from 'react';

const Movie = ({ title, image, description }) => {
  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Movie;
