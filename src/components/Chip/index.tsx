import React from 'react';
import './styles.css';

type Props = {
    image: string,
    title: string
}

const BakeryItem = (props: Props) => {
    const {image, title} = props;
    return (
        <div className="bakery-item">
            <div className="image-container">
                <img 
                    src={image}
                    alt="Bakery items"
                    className="bakery-image"
                />
            </div>
            <h2 className="bakery-title">{title}</h2>
        </div>
    );
};

export default BakeryItem;