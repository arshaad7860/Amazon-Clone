import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  

  return (
    <div className="checkout">
      <div className="checkout__left">

        {/* ad image banner */}
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/TV/Sanyo/SanyoWebBanner01._CB1198675309_.jpg"
          alt="amazon ad"
          className="checkout__ad"
        />
        <div>
          <h3 className="checkout__email">Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
          {/* CheckoutProduct */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        {/* subtotal component */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
