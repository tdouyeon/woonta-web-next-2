'use client';
import { useEffect, useState } from 'react';
import counselService from '@/service/counsel.service';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export default function counselDetailPage({ params }) {
  const [isMobile, setIsMobile] = useState(false);
  const [counselInfo, setCounselInfo] = useState({});

  useEffect(() => {
    counselService
      .getCounselDetail(params.id)
      .then((response) => {
        setCounselInfo(response);
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
    <main
      className={!isMobile ? `flex-grow  h-screen flex justify-center` : ''}
    >
      <div className={`bg-baseBG ${!isMobile ? `w-[420px]` : ''}`}>
        <PageHeader name={`${counselInfo?.name} 선생님`} />

        <div
          className={`flex bg-baseBG min-h-[95vh] flex-col ${
            isMobile ? 'w-screen' : 'w-[420px]'
          }`}
        >
          <div className="bg-gray-900 font-semibold w-[100%] h-[350px] py-2 px-4"></div>
          <div className=" pl-6 pt-4 bg-white py-7">
            <div className="text-primary text-2xl font-semibold">
              {counselInfo?.name} 선생님
            </div>
            <div className="flex">
              <Image
                src="/images/placeholder.png"
                alt="Logo"
                width={30}
                height={3}
              />
              <div className="text-gray-400">{counselInfo?.region}</div>
            </div>
            <div className="text-primary text-2xl font-semibold">
              {counselInfo?.price}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
