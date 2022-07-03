# useAnimateCards
useAnimateCards is a hook, used for animating cards in a container one by one , after a specific time interval, 

For using this hook, one must install react-intersection-observer, it is used for animating cards only when the cards  container is in view.

const [cardsContainerRef, shouldCardAnimate ] = useAnimateCards(cards.length, 500, {animateOnce:true/false, treshold: 0...1})

cardsContainerRef =  As the name implies it should be assigned to the ref of Cards Container

shouldCardAnimate = shouldCardAnimate takes index of the card in container, and checks wether to animate or not, i.e 
{ cards.map( (card, index) => (
  
  <Card animate = {shouldCardAnimate(card, index) }/>  //And in the Card component you can use this for styling

) )}


500 = time interval for animating a card

animatedOnce = true implies it should only trigger once on the first view of cardsContainer, false is the opposite

treshold: 0 implies that the cards should animate when cardsContainer is just shown, 0.5 implies when the cardsContainer is 50% shown and so on


