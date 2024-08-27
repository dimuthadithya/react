import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { ProductDetails } from './components/ProductDetails';
import { ProductList } from './components/ProductList';
import { Admin } from './components/Admin';
import { NotFound } from './components/NotFound';

function App() {
  const user = true;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Footer" element={<Footer />} />
          <Route
            path="admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
