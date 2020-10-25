import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, rating, price }) {


    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket =()=>{
        //remove the itemm from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }

  return (
    <div className="checkoutProduct">
      <img
        src={image}
        alt={title + " image"}
        className="checkoutProduct__image"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
            {title}
        </p>
        <div className="checkoutProduct__price">
            <small>R</small>
            <strong>{price}</strong>
        </div>
        <div className="checkoutProduct__rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>
            Remove from Basket
        </button>
      </div>

    </div>
    
  );
}

export default CheckoutProduct;
