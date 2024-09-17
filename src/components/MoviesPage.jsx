import React from 'react';
import Header from './Header';
import MovieList from './MovieList';


const movies = [
  {
    title: "The Matrix",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description: "A hacker discovers the reality of his world is an illusion."
  },
  {
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_.jpg",
    description: "A gripping tale of Batman and Joker."
  },
  {
    title: "Interstellar",
    image: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    description: "A space exploration epic."
  }
];


const MoviesPage = () => {
  return (
    <>
      <Header />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
