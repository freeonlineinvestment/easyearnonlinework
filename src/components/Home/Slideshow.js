import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from './pics/1.jpg';
import pic2 from './pics/2.jpg';
import pic3 from './pics/3.jpg';
import pic4 from './pics/4.jpg';

import './Home.css';
import './HomeAnimations.css';

const fadeImages = [
  pic2,
  pic1,
  pic3,
  pic4
];
 const classN='container-AnimationIN ';
  const classN2='container2-AnimationIN ';
  const classN3='container3-AnimationIN ';

  
  const duration={
    duration: 3000,
    canSwipe: true,
    dots:true
  }
class Slideshow extends React.Component {
  
  constructor(){
    super();
    this.state={
      slideNo:0
    }
  }
  onSlideChange = () =>{
    
    console.log('Slide: ',this.state.slideNo);
  }

  render(){
    return (
          <Fade  className='home-slider' {...duration}>
              <img className="image-container" alt="imageAlting" src={fadeImages[0]} />
              <img className="image-container" alt="imageAlting" src={fadeImages[1]} />
              <img className="image-container" alt="imageAlting" src={fadeImages[2]} />
              <img className="image-container" alt="imageAlting" src={fadeImages[3]} />
          </Fade>
    );
  }
}
export default Slideshow;