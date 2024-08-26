import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { ProductDetails } from './components/ProductDetails';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/10001" element={<ProductDetails />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Footer" element={<Footer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
