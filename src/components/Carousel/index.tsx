import React, { Children, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const childrenArray = Children.toArray(children);

  const [carouselState, setCarouselState] = useState({
    stepDistance: 0,
    totalSteps: 0,
    remainingDistance: 0,
  });

  const { next, previous, shouldShowNext, shouldShowPrevious, currentIndex } = 
  useCarousel(carouselState.totalSteps, carouselState.remainingDistance / carouselState.stepDistance, vertical);
  

    const calculateSteps = useCallback(() => {
        if (containerRef.current) {
          const firstChild = containerRef.current.firstChild as HTMLElement;
          const childWidth = firstChild.offsetWidth;
          const totalLength = childWidth * childrenArray.length;
          const viewportWidth = window.innerWidth;
          const stepDistance = slideDistance ?? childWidth;
          const totalSteps = Math.floor((totalLength - viewportWidth) / stepDistance);
          const remainingDistance = (totalLength - viewportWidth) % stepDistance;
          setCarouselState({ stepDistance, totalSteps, remainingDistance });
        }
      }, [childrenArray.length, slideDistance]);
  

  useEffect(() => {
    calculateSteps();
    
    const handleResize = () => calculateSteps();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div ref={containerRef} 
        className={ vertical ? "carousel-content-column": "carousel-content-row" }
        style={{
            transform: `translateX(-${currentIndex * carouselState.stepDistance}px)`,
          }}>
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