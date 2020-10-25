import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt=""
          className="checkout__image"
          src="https://m.media-amazon.com/images/S/abs-image-upload-na/d/AmazonStores/A1RKKUPIHCS9HS/18058726c02a93b2a95f796256bc0a17.w9031.h3456._SL5000_CR0%2C425%2C5000%2C999_SX1500_.jpg"
        ></img>
        {basket?.length === 0 ? (
          <div className="checkout__empty">
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {/* List out all the checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
