import React from 'react';
import { Card } from '../components';

export const MovieList = () => {
  return (
    <main>
      <section className="mx-auto max-w-7xl py-7">
        <div className="flex flex-wrap justify-start ">
          <Card />
        </div>
      </section>
    </main>
  );
};
