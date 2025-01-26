import React, { Children, ReactNode} from 'react';
import { useCarousel } from './useCarousel.ts';
import "./styles.css";
import CarouselButton from '../CarouselButton/index.tsx';

type Props =  {
  children: ReactNode;
  vertical?: boolean;
  slideDistance?: number;
}

const Carousel = (props: Props) => {
  const { children, vertical, slideDistance} = props;
  const { next, previous, shouldShowNext, shouldShowPrevious, currentIndex, carouselState, containerRef} = useCarousel(children, slideDistance, vertical);
  
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div ref={containerRef} 
        className={ vertical ? "carousel-content-column": "carousel-content-row" }
        style={{transform: `translateX(-${currentIndex * carouselState.stepDistance}px)`}}>
          {Children.map(children, (child, index) => (
            <div key={index} className='carousel-item'>
              {child}
            </div>
          ))}
        </div>
      </div>
      {shouldShowPrevious && <CarouselButton onClick={previous} className={"carousel-button-prev"}>←</CarouselButton>}
      {shouldShowNext && <CarouselButton onClick={next} className={"carousel-button-next"}>→</CarouselButton>}
    </div>
  );
};

export default Carousel;