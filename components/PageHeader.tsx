'use client';
import { useEffect, useState } from 'react';

const PageHeader = ({ name }: { name: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="w-[100vw] 420px:w-420 fixed top-0">
      <nav className="w-full text-white flex justify-between items-center p-4">
        <svg
          onClick={() => window.history.back()}
          className="w-6 h-6 cursor-pointer"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
            transform="rotate(90 10 10)"
          />
        </svg>
      </nav>
      <div
        className={`w-[100vw] 420px:w-420  fixed top-0 transform transition-transform duration-300 w-[100vw] 420px:w-420${
          isVisible ? 'translate-y-0 bg-gray-900' : '-translate-y-full'
        } `}
      >
        <nav className="text-white flex justify-between items-center p-4">
          <svg
            onClick={() => window.history.back()}
            className="w-6 h-6 cursor-pointer"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
              transform="rotate(90 10 10)"
            />
          </svg>
          {isVisible && <div>{name}</div>}
          <div></div>
        </nav>
      </div>
    </header>
  );
};

export default PageHeader;
