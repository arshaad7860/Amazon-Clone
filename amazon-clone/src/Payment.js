import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout"> {basket?.length} Items</Link>)
        </h1>

        {/* payment section delivery */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>9 Hattingh Rd</p>
            <p>Summerstrand, PE</p>
          </div>
        </div>

        {/* pament secton you items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {/* all products show here */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment section credit cards */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* stripe magic */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
