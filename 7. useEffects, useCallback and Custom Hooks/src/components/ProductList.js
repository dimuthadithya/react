import React, { useCallback, useEffect, useState } from 'react';
import './product.css';
import { useFetch } from '../hooks/useFetch';
import loadingimg from '../assets/loading.gif';

export const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [url, setUrl] = useState(`http://localhost:8000/products`);

  const { data: products, loading } = useFetch(url);
  console.log(products);

  //   const [count, setCount] = useState();

  /*   useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // setCount(data.length);
      });
  }, [url]); */

  /*  const fetchProducts = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }, [url]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
 */
  return (
    <section>
      <div className="btn-div">
        {/* <button className="btn-check">{count}</button> */}
        <button
          className="btn-check"
          onClick={() => {
            setUrl('http://localhost:8000/products');
          }}
        >
          All
        </button>
        <button
          className="btn-check"
          onClick={() => {
            setUrl('http://localhost:8000/products?in_stock=true');
          }}
        >
          In Stock
        </button>
        <button
          className="btn-check"
          onClick={() => {
            setUrl('http://localhost:8000/products?in_stock=false');
          }}
        >
          Out Of Stock
        </button>
      </div>

      {loading && <img className="loading" src={loadingimg} alt="" />}

      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span className="price">${product.price}</span>
              <span className={product.in_stock ? 'in-stock' : 'unavailable'}>
                {product.in_stock ? 'stock' : 'unavailable'}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
