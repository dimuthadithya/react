import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import React from 'react';

const App = () => {
  const username = 'msi';

  return (
    <>
      <Header />
      <h1 className="red">{username}</h1>
      <h2>h2</h2>
      <h3>h3</h3> <br />
      <div>this is div</div>
      <Footer />
    </>
  );
};

export default App;
