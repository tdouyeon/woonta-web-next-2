'use client';
import BottomTab from '@/components/BottomTab';
import Header from '@/components/Header';
import { useEffect, useState, SetStateAction } from 'react';
import counselService from '@/service/counsel.service';
import Box from '@/components/Box';
import Link from 'next/link';

export default function Home() {
  const [counselInfoList, setCounselInfoList] = useState([]);

  const setCounsel = async () => {
    try {
      const data: unknown = await counselService.getCounselList();
      const result = data as SetStateAction<never[]>;
      setCounselInfoList(result);
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
        <div className="flex-grow flex flex-col justify-center items-center bg-baseBG min-h-[90vh] text-center">
          <Link href="/contents/mbti" className="bottom-button w-[200px]">
            MBTI맞추기
          </Link>
          <Link href="/contents/love" className="bottom-button w-[200px]">
            결혼/연애운
          </Link>
          <Link href="/contents/gunghap" className="bottom-button w-[200px]">
            궁합 점수
          </Link>
        </div>
        <div className="pt-12 bg-baseBG">
          <BottomTab />
        </div>
      </div>
    </main>
  );
}
