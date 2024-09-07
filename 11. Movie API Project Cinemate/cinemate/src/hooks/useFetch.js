import React, { useState, useEffect } from 'react';

export const useFetch = (api) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${api}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await response.json();
      setData(json.results);
    }

    fetchMovies();
  }, [api]);

  return { data };
};
