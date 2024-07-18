'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import counselService from '@/service/counsel.service';
import Box from '@/components/Box';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [counselList, setCounselList] = useState([]);

  useEffect(() => {
    counselService
      .getCounselList()
      .then((response) => {
        setCounselList(response);
      })
      .catch((error) => {
        console.error('Error fetching mock data:', error);
      });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 401);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className={`flex-grow h-screen flex justify-center `}>
      <div className={`bg-baseBG ${isMobile ? `w-[100vw]` : 'w-[420px]'}`}>
        <div
          className={`pt-12 bg-baseBG ${isMobile ? `w-[100vw]` : 'w-[420px]'}`}
        >
          <Header />
        </div>
        <div className="flex-grow flex justify-center bg-baseBG min-h-[90vh]">
          <div className="p-4">
            {counselList.length > 0 &&
              counselList.map((counsel, index) => (
                <Box key={index} counsel={counsel} />
              ))}
          </div>
        </div>
        <div className="pt-12 bg-baseBG">
          <Footer />
        </div>
      </div>
    </main>
  );
}
