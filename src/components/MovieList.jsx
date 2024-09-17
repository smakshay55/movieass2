import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  if (!movies.length) return <div>No movies to display</div>;

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-4" key={index}>
            <Movie
              title={movie.title}
              image={movie.image}
              description={movie.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
