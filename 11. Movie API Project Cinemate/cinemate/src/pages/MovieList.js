import React, { useState } from 'react';
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({ api }) => {
  const { data: movies } = useFetch(api);

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
