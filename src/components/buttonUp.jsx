import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import arrow from '../assets/icons/ArrowUp.png';

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
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <motion.button 
          onClick={scrollToTop} 
          className="fixed bottom-[70px] right-5 p-2 text-lg bg-[#F7A539] text-white rounded-full shadow-lg w-[60px] h-[60px] flex items-center justify-center z-20"
          whileHover={{ y: -10 }}
        >
          <img src={arrow} alt="Scroll to top" className='z-[21]' />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTopButton;
