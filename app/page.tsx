'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import counselService from '@/service/counsel.service';
import Box from '@/components/Box';

export default function Home() {
  const [counselInfoList, setCounselInfoList] = useState([]);

  const setCounsel = async () => {
    try {
      const data = await counselService.getCounselList();
      setCounselInfoList(data);
    } catch (e) {
      console.error('getCounsel error', e);
    }
  };

  useEffect(() => {
    setCounsel();
  }, []);

  return (
    <main className={`flex-grow h-screen flex justify-center `}>
      <div className="w-[100vw] 420px:w-420">
        <div className="pt-12 bg-baseBG">
          <Header />
        </div>
        <div className="flex-grow flex justify-center bg-baseBG min-h-[90vh]">
          <div className="p-4">
            {counselInfoList.length > 0 &&
              counselInfoList.map((counsel, index) => (
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
