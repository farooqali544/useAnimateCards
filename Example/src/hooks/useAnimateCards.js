import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

let timer;

export default function useAnimateCards(
  cardsLength,
  animationInterval = 500,
  options = { triggerOnce: true, threshold: 0 }
) {
  const [cardsRef, inView] = useInView({
    threshold: options.threshold,
    triggerOnce: options.triggerOnce,
  });

  const [animatedCards, setAnimatedCards] = useState([]);

  const startAnimation = () => {
    const animateCard = () => {
      setAnimatedCards((prev) => [...prev, prev.length]);
    };

    timer = !timer && setInterval(animateCard, animationInterval);
  };

  const shouldCardAnimate = (cardIndex) => {
    return animatedCards.includes(cardIndex);
  };

  //   If cardsContainer is in View Start Animation
  useEffect(() => {
    if (inView) {
      startAnimation();
    }

    return () => {
      setAnimatedCards([]); // For TriggerOnce:false
      clearInterval(timer);
      timer = null;
    };
  }, [inView]);

  //If all the cards have been animated THEN clear Interval
  useEffect(() => {
    if (animatedCards.length === cardsLength) {
      clearInterval(timer);
    }
  }, [animatedCards]);

  return [cardsRef, shouldCardAnimate];
}
