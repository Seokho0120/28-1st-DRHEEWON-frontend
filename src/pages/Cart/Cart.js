import { useEffect, useState } from 'react';

import ContentHeader from './../../components/RegisterLogin/ContentHeader';
import SelectCart from './SelectCart';
import CartList from './CartList';
import ProductPrice from './ProductPrice';

import './Cart.scss';
const Cart = () => {
  const [productData, setProductData] = useState([]);
  const productExist = productData.length;

  useEffect(() => {
    fetch('http://localhost:3000/data/cartList/cartList.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  return (
    <div className="cartContainer">
      <ContentHeader pageInfo="장바구니" />
      <main>
        <SelectCart />
        <div className="cartPriceListWrap">
          <ul className="cartListWrap">
            {productData.map(product => (
              <CartList key={product.id} product={product} />
            ))}
          </ul>
          {productExist ? (
            productData.reduce((acc, cur) => (
              <ProductPrice priceAll={acc.price + cur.price} />
            ))
          ) : (
            <ProductPrice priceAll={0} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
