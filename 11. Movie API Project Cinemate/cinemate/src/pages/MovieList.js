import React, { useEffect, useState } from 'react';
import { Card } from '../components';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const url =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=25939239a6cdd327d9c31aef2af60d5c&language=en-US';

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=25939239a6cdd327d9c31aef2af60d5c&language=en-US'
      );
      const data = await response.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, []);

  return (
    <main>
      <section className="mx-auto max-w-7xl py-7">
        <div className="flex flex-wrap justify-start ">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
};
