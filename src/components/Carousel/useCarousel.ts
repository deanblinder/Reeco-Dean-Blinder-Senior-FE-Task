import { useState, useMemo } from 'react';

export const useCarousel = (totalSteps: number, lastStepRatio: number, vertical?:boolean) => {
const [currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (delta: number) => {
        setCurrentIndex((prevIndex) => {
            return prevIndex + delta;
        });
    };

    const next = () => {
        updateIndex(currentIndex === totalSteps ? lastStepRatio : 1);
    };

    const previous = () => {
        updateIndex(currentIndex === totalSteps + lastStepRatio ? -lastStepRatio : -1);
    };

  const shouldShowNext = useMemo(() => !vertical && currentIndex <= totalSteps, [currentIndex, totalSteps, vertical]);
  const shouldShowPrevious = useMemo(() => !vertical && currentIndex !== 0, [currentIndex, vertical]);

return {
    currentIndex,
    next,
    previous,
    shouldShowNext,
    shouldShowPrevious,
    setCurrentIndex
  };
};
