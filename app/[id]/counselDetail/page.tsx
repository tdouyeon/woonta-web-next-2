'use client';
import { useEffect, useState } from 'react';
import counselService from '@/service/counsel.service';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export default function counselDetailPage({ params }) {
  const [counselInfo, setCounselInfo] = useState({});

  const setCounselDetail = async () => {
    try {
      const data = await counselService.getCounselDetail(params.id);
      setCounselInfo(data);
    } catch (e) {
      console.error('getCounselDetail error', e);
    }
  };

  useEffect(() => {
    setCounselDetail();
  }, []);

  return (
    <main className="flex-grow h-screen flex justify-center">
      <div className="bg-baseBG w-[100vw] 420px:w-420">
        <PageHeader name={`${counselInfo?.name} 선생님`} />

        <div className="flex bg-baseBG min-h-[95vh] flex-col">
          <div className="bg-gray-900 font-semibold h-[350px] py-2 px-4" />
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
