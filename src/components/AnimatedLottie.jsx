// src/components/AnimatedLottie.jsx
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/your-animation.json'; // Path to your Lottie JSON file

const AnimatedLottie = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true} // Set to true if you want the animation to loop
      autoplay={true} // Set to true to start playing automatically
      style={{ width: '100%', height: '100%' }} // Adjust width and height as needed
    />
  );
};

export default AnimatedLottie;
