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

  const handleSubmit = async (e) => {
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
      <div className="w-[100vw] 420px:w-420 bg-white flex justify-between flex-col">
        <PageHeader name={'MBTI 맞추기'} />
        <div className="mx-6 my-[35vw]">
          <div className="text-primary text-center text-2xl font-bold mt-[20vw]">
            생년월일시분을 알려주세요
          </div>
          <div className="text-primary text-center text-primary font-samibold my-2">
            입력 정보를 기반으로 <br />
            사주를 통해 MBTI를 예측해볼게요!
          </div>
          <BirthDateForm formData={formData} setFormData={setFormData} />
        </div>
        <button className="bottom-button">확인</button>
      </div>
    </form>
  );
}
