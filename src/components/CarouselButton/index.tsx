import React from "react";
import './styles.css'

type Props = {
    className?: string
    children: string
    onClick: () => void
}

const CarouselButton = (props: Props) => {
    const {onClick, children, className} = props;
    return (
    <button
      className={`carousel-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
    )
    
};
  export default CarouselButton