'use client';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function ResultPage({ params }: any) {
  return (
    <div className={`flex-grow h-screen flex justify-center `}>
      <div className="w-[100vw] 420px:w-420 bg-white flex justify-between flex-col">
        <PageHeader name={'MBTI 결과'} />
        <div className="flex-1 mx-6 mt-[35vh]">
          <div className="text-primary text-center text-xl font-semibold">
            사주를 바탕으로 예상되는 MBTI 결과는
          </div>
          <div className="text-main text-center text-2xl font-bold mt-[1vh]">
            {params.result}
          </div>
          <div className="text-primary text-center text-primary font-samibold my-2">
            입니다.
          </div>
        </div>
        <Link href="/" className="bottom-button text-center">
          홈으로 돌아가기
        </Link>
        <button
          onClick={() => {
            window.history.back();
          }}
          className="bottom-button"
        >
          다시하기
        </button>
      </div>
    </div>
  );
}
