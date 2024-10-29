import { useState, useEffect } from 'react';

import arrow from '../assets/icons/ArrowUp.png'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
    {isVisible && (
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-5 right-5 p-2 text-lg bg-[#F7A539] text-white rounded-full shadow-lg w-[60px] h-[60px] flex items-center justify-center z-20"
      >
        <img src={arrow} alt=""  className='z-[21]'/>
      </button>
    )}
  </div>
  );
};


export default ScrollToTopButton;
