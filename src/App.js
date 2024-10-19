import './App.css';
import photo1 from './img/photo1.png';
import photo2 from './img/photo2.png';

//  CONTENT OBJECT
const content = {

  layout1: {
    photo: {
      img: photo1,
      alt: 'Orange cat in space'
    },
    headline: 'Space Cat Adventures',
    tagline: 'An epic cosmic journey',
    text: 'Follow our brave space cat as it embarks on thrilling missions across the universe. From dodging asteroids to making friends with alien creatures, every moment is an adventure!'
  },

  layout2: {
    photo: {
      img: photo2,
      alt: 'Grey cat in space'
    },
    headline: 'Galactic Paws: The Space Cat Chronicles',
    tagline: 'One paw at a time!',
    text: 'From saving space stations from malfunctioning AI systems to exploring uncharted planets, Captain Whiskers proves that even in the vastness of the universe, curiosity is a cat’s greatest weapon. Armed with his trusty laser claw and accompanied by a crew of quirky robotic sidekicks, Whiskers is on a mission to protect the galaxy, one paw at a time.'
  }
}

//  RESPONSIVE REUSABLE COMPONENT 
function App({content, flipped, darkBackgroundColor, lightBackgroundColor, textPosition}) {
  return (
    <div 
      className={`container ${flipped && 'flipped-layout'}`}
      style={{ backgroundColor: darkBackgroundColor ? darkBackgroundColor : lightBackgroundColor ? lightBackgroundColor : '' }}  
    >

      <div className='img-container'>
        <img 
        src={content.photo.img}
        alt={content.photo.alt} />
      </div>

      <div className={`text-container ${textPosition === 'top' ? 'text-position-top' : textPosition === 'bottom' ? 'text-position-bottom' : ''}`}>
        <h1 style={{color: darkBackgroundColor && '#ffffff'}}>
          {content.headline}
        </h1>
        <h2>{content.tagline}</h2>
        <p style={{color: darkBackgroundColor && '#ffffff'}}>
          {content.text}
        </p>
      </div>

    </div>
  );
}

export default App;
export { content };
