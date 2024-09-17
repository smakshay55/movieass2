import React, { useState, useEffect } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import axios from 'axios';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: 'a8aa2d8d9eb56a828e3b8f4f751b3671' // Replace with your actual API key
            }
          }
        );

        if (response.status === 200) {
          const movieData = response.data.results.map((movie) => ({
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, // Correct image URL format
            description: movie.overview
          }));
          setMovies(movieData);
        } else {
          setError('No movies found');
        }
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Header />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
