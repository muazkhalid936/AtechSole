import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSlow, setIsSlow] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      setTimeout(() => {
        setIsSlow(false); // Change to fast animation after 1 second
      }, 1000);
    } else {
      setIsVisible(false);
      setIsSlow(true); // Reset to slow animation when scrolling back to top
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
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all ${
            isSlow ? 'duration-1000 ease-in' : 'duration-300 ease-out'
          } hover:bg-blue-700 transform hover:scale-110`}
          style={{ zIndex: 1000 }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
