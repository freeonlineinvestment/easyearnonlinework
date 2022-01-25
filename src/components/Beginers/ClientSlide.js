import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import'./Beginers.css';

import pic2 from './pics/2.png';
import pic3 from './pics/3.png';
import pic4 from './pics/4.png';
import pic5 from './pics/5.png';

const ClientSlide = () => {
const fadeImages = [
  pic2,pic3,pic4,pic5
];

  const fadeProperties = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    duration: 3000,
    canSwipe: true,
    slidesToScroll: 1

  };

  return (
    <div className='Slider'>
        <Slide {...fadeProperties}>
              <img className='ClientImg' alt='1' src={fadeImages[0]} />
              <img className='ClientImg' alt='1' src={fadeImages[1]} />
              <img className='ClientImg' alt='1' src={fadeImages[2]} />
              <img className='ClientImg' alt='1' src={fadeImages[3]} />
              
        </Slide>
    </div>
  );
};

export default ClientSlide;