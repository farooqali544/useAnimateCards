The useAnimateCards hook is a simple way to animate cards within a container, one at a time, with a customizable time interval between each animation. This can be achieved by installing the react-intersection-observer library, which allows for the animation of cards only when the container is in view.

To use the useAnimateCards hook, pass in the following parameters

The number of cards in the container

The time interval for animating each card


An options object with the following properties:

animateOnce: A boolean value that determines whether the animation should only trigger on the first view of the container (true) or every time the container is in view (false).

treshold: A value between 0 and 1 that determines when the animation should be triggered, based on the amount of the container that is in view. A value of 0 means the animation will be triggered when the container is just visible, while a value of 0.5 means the animation will be triggered when the container is 50% visible, and so on.

To use the hook, the following code can be used:

const [cardsContainerRef, shouldCardAnimate] = useAnimateCards(cards.length, 500, {animateOnce: true/false, treshold: 0...1});

cardsContainerRef should be assigned to the reference of the cards container element. shouldCardAnimate is a function that takes the index of the card in the container and returns a boolean value indicating whether the card should be animated.

Example usage:

<div ref={cardsContainerRef}>
  {cards.map((card, index) => (
    <Card animate={shouldCardAnimate(index)} />
  ))}
</div>
