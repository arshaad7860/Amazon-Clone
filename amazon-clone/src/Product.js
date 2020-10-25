import { Button } from "@material-ui/core";
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  //how we get access to data layer
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch some action or the item into data layer
    dispatch({
      //this will shoot your product to the data layer
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        {/* title */}
        <p>{title}</p>
        {/* Price */}
        <p className="product__price">
          <small>R</small>
          <strong>{price}</strong>
        </p>
        {/* star rating */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      {/* image */}
      <img src={image} alt={title + " Image"} />
      {/* button add to basket */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
