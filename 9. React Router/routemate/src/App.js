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
    <div>
      <header>
        <Header></Header>
      </header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="products" element={<ProductList></ProductList>}></Route>
        <Route
          path="products/10001"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="Contact" element={<Contact></Contact>}></Route>
        <Route path="Footer" element={<Footer></Footer>}></Route>
      </Routes>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
