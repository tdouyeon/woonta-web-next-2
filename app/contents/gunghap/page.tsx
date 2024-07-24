'use client';
import PageHeader from '@/components/PageHeader';
import contentsService from '@/service/contents.service';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BirthDateForm from '@/components/BirthDateForm';

export default function GunghapPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    yyyy: '',
    MM: '',
    dd: '',
    hh: '',
    mm: '',
  });

  const [otherFormData, setOtherFormData] = useState({
    yyyy: '',
    MM: '',
    dd: '',
    hh: '',
    mm: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await contentsService.getGunghapResult([
        formData,
        otherFormData,
      ]);
      const queryString = `data=${encodeURIComponent(
        JSON.stringify(response.data),
      )}`;
      router.push(`/contents/gunghap/result?${queryString}`);
    } catch (e) {
      console.log(e, 'getGunghapResult error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex-grow h-screen flex justify-center `}
    >
      <div className="w-[100vw] 420px:w-420 bg-white flex justify-between flex-col overflow-hidden">
        <PageHeader name={'궁합 테스트'} />
        <div className="flex-1 mx-6 mt-[20vh]">
          <div className="text-primary text-center text-2xl font-bold">
            궁합 테스트 🌹
          </div>
          <div className="text-primary text-center text-primary font-samibold mt-2 mb-7">
            <span className="text-main font-semibold text-lg">
              년/월/일/시/분
            </span>
            을 입력해주세요. <br />
            입력 정보를 기반으로 궁합 점수를 알려드릴게요!
          </div>
          <div className="mt-4 text-gray-700 ml-2 mb-1">본인</div>
          <BirthDateForm formData={formData} setFormData={setFormData} />
          <div className="mt-4 text-gray-700 ml-2 mb-1">상대방</div>
          <BirthDateForm
            formData={otherFormData}
            setFormData={setOtherFormData}
          />
        </div>
        <button className="bottom-button">확인</button>
      </div>
    </form>
  );
}
