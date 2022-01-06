import { useEffect, useState } from 'react';

import EmptyCart from './EmptyCart';
import CartContent from './CartContent';

const Cart = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // fetch(
    //   'http://7049-211-106-114-186.ngrok.io/carts?Authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cCI6MTY0MTUyMDI0NH0.2qLf-fKTaAl3ZvhbiEODeyEVKTkdIj7dQnnfrY4_jG4',
    //   {
    //     headers: {
    //       Authorization:
    //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cCI6MTY0MTUyMDI0NH0.2qLf-fKTaAl3ZvhbiEODeyEVKTkdIj7dQnnfrY4_jG4',
    //     },
    //   }
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     // setProductData(data.result);
    //     console.log(data.result);
    //   });
  }, []);

  return productData.length === 0 ? (
    <EmptyCart />
  ) : (
    <CartContent productData={productData} setProductData={setProductData} />
  );
};

export default Cart;
