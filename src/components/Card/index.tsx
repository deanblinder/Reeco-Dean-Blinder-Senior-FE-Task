import React from "react";
import "./styles.css";
import Button from "../Button/index.tsx";


type Props = {
  title: string;
  price: number;
  image: string;
  description: string;
  onAddToCart: () => void;
}

const Card = (props: Props) => {
    const { title, price, image, description, onAddToCart } = props
  return (
    <div className="food-card">
      <img 
        src={image}
        alt={title}
        className="food-card_image"
      />
      <h3 className="food-card_title">{title}</h3>
      <p className="food-card_description">{description}</p>
      <div className="food-card_footer">
        <span className="food-card_price">${price.toFixed(2)}</span>
        <Button onClick={onAddToCart} title={'Add To Cart'}/>
      </div>
    </div>
  );
};

export default Card;