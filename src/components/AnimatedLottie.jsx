
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/your-animation.json'; 

const AnimatedLottie = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true} 
      style={{ width: '100%', height: '100%' }} 
    />
  );
};

export default AnimatedLottie;
