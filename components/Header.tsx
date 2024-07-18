'use client';
import { useEffect, useState } from 'react';
import Dropbox from './Dropbox';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 401);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`${
        isMobile ? `w-[100vw]` : 'w-[420px]'
      } bg-gray-800 top-0 text-white shadow-md p-4 fixed`}
    >
      <div className="flex justify-between items-center">
        <nav>
          <Dropbox />
        </nav>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            검색
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
