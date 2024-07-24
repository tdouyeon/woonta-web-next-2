'use client';
import PageHeader from '@/components/PageHeader';
import contentsService from '@/service/contents.service';
import { useState, useRef, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import BirthDateForm from '@/components/BirthDateForm';

export default function MBTIPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    yyyy: '',
    MM: '',
    dd: '',
    hh: '',
    mm: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await contentsService.getMbtiTestResult(formData);
      router.push(`/contents/mbti/${response.data}/result`);
    } catch (e) {
      console.log(e, 'getMbtiTestResult error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex-grow h-screen flex justify-center `}
    >
      <div className="w-[100vw] 420px:w-420 bg-white flex justify-between flex-col overflow-hidden">
        <PageHeader name={'MBTI 맞추기'} />
        <div className="flex-1 mx-6 mt-[35vh]">
          <div className="text-primary text-center text-2xl font-bold">
            MBTI 테스트 👀
          </div>
          <div className="text-primary text-center text-primary font-samibold mt-2 mb-5">
            입력 정보를 기반으로 <br />
            사주를 통해 MBTI를 예측해 볼게요!
          </div>
          <BirthDateForm formData={formData} setFormData={setFormData} />
        </div>
        <button className="bottom-button">확인</button>
      </div>
    </form>
  );
}
