import { useState, useMemo, useCallback, useEffect, useRef, Children} from 'react';

export const useCarousel = (children:any, slideDistance?: number, vertical?:boolean) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const childrenArray = Children.toArray(children);

    const [carouselState, setCarouselState] = useState({
        stepDistance: 0,
        totalSteps: 0,
        remainingDistance: 0,
        lastStepRatio: 0
    });

    const calculateSteps = useCallback(() => {
        if (containerRef.current) {
        const firstChild = containerRef.current.firstChild as HTMLElement;
        const childWidth = firstChild.offsetWidth;
        const totalLength = childWidth * childrenArray.length;
        const viewportWidth = window.innerWidth;
        const stepDistance = slideDistance ?? childWidth;
        const totalSteps = Math.floor((totalLength - viewportWidth) / stepDistance);
        const remainingDistance = (totalLength - viewportWidth) % stepDistance;
        setCarouselState({ stepDistance, totalSteps, remainingDistance, lastStepRatio: remainingDistance/stepDistance});
        }
    }, [childrenArray.length, slideDistance]);


    useEffect(() => {
        calculateSteps();

        const handleResize = () => calculateSteps();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);

    const updateIndex = (delta: number) => {
        setCurrentIndex((prevIndex) => {
            return prevIndex + delta;
        });
    };

    const next = () => {
        updateIndex(currentIndex === carouselState.totalSteps ? carouselState.lastStepRatio : 1);
    };

    const previous = () => {
        updateIndex(currentIndex === carouselState.totalSteps + carouselState.lastStepRatio ? -carouselState.lastStepRatio : -1);
    };

  const shouldShowNext = useMemo(() => !vertical && currentIndex <= carouselState.totalSteps, [currentIndex, carouselState.totalSteps, vertical]);
  const shouldShowPrevious = useMemo(() => !vertical && currentIndex !== 0, [currentIndex, vertical]);

  return {
    currentIndex,
    next,
    previous,
    shouldShowNext,
    shouldShowPrevious,
    setCurrentIndex,
    carouselState,
    containerRef
  };
};
