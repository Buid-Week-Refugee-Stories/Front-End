
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Tween } from 'react-gsap';
import refugeesMosaic from '../images/refugeesMosaic.jpg';
import refugees from '../images/refugees.jpg';
import handsTogether from '../images/handsTogether.jpg';

const items = [
  {
    src: refugeesMosaic,
    altText: 'refugees mosaic in Tel Aviv',
    caption_header: 'Global Awareness',
    caption_text: 'Today there is an obvious and immediate need to increase our empathy for refugees across the world.'
  },
  {
    src: refugees,
    altText: 'refugees by a seashore',
    caption_header: 'Life-Changing Experiences',
    caption_text: 'Across the world, as people become refugees due to war, economic collapse, poverty, and lack of basic human resources, they flee their countries and hope to enter a more stable environment.'
  },
  {
    src: handsTogether,
    altText: 'hands in a team gesture in Greece',
    caption_header: 'Sharing and Caring',
    caption_text: 'A greater understanding of refugees as people and enhancing empathy towards them is integral to citizens and governments welcoming and supporting them during a very difficult time.'
  }
];

function Home() {
  //setting up the carousel variables and methods
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    // Advance to the next item, if user isn't at the last item.
    // Otherwise, go to the first item.
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
    <CarouselCaption captionText={item.caption_text} captionHeader={item.caption_header} />
      </CarouselItem>
    );
  });

  return (
    <div >
      <Tween from={{ scale: 0}}>
      <h1 className='mainH1'>Refugee Stories</h1>
      </Tween>
      
      <Tween from={{ xPercent: 100, opacity: 0, scale: 0}}>
        <h2><Link to='/stories' className='inlineLink'>Learn</Link> about the lives of refugees.</h2>
      </Tween>
      <Tween from={{ xPercent: -100, opacity: 0, scale: 0}}>
        <h2><Link to='/submission' className='inlineLink'>Share</Link> your stories.</h2>
      </Tween>

      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>

      <h3 className='homeText'>Global citizenship starts with awareness, empathy, and the ability to change.<br /> 
        Unify humanity and celebrate cultures by sharing your experiences, 
        one story at a time. </h3>
    </div>
  );
}

export default Home;

