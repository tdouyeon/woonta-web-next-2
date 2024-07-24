'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

interface Result {
  year: number;
  yearJiji: string;
  sipseong: string;
  value: number;
}

export default function ResultPage() {
  const [results, setResults] = useState<Result[]>();
  const searchParams = useSearchParams();
  const dataString = searchParams.get('data');

  const processResult = (results: Result[]) => {
    results.sort((a, b) => b.value - a.value);
    const newResults = results.slice(0, 3);
    setResults(newResults);
  };
  const getQueryString = () => {
    if (dataString) {
      try {
        const results = JSON.parse(decodeURIComponent(dataString));
        processResult(results);
      } catch (e) {
        console.error('Failed to parse JSON:', e);
      }
    }
  };

  useEffect(() => {
    getQueryString();
  }, []);

  return (
    <div className={`flex-grow h-screen flex justify-center`}>
      <div className="w-[100vw] 420px:w-420 bg-white flex justify-between flex-col">
        <PageHeader name={'연애/결혼운 결과'} />
        <div className="flex-1 mx-6 mt-[15vh] 420px:mt-[20vh]">
          <div className="text-primary text-center text-xl font-semibold ">
            사주를 바탕으로 예상되는
            <br />
            <span className="text-main font-semibold">연애/결혼운을 </span>
            알려드릴게요.
          </div>
          {results && results[0]?.year ? (
            <div className="overflow-y-auto scrollbar-custom text-center py-10">
              {results &&
                results.map((result, index) => (
                  <div key={index} className="text-primary p-2">
                    <div className="text-gray-500 text-lg pt-2">
                      {index + 1}순위
                    </div>
                    <span className="text-main text-2xl font-bold">
                      {result?.year}
                    </span>
                    <span className="text-lg">년 </span>
                    <span className="text-2xl font-semibold">
                      {result?.value}
                    </span>
                    <span>점</span>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-primary flex h-[80%] justify-center items-center font-semibold">
              조회하지 못했어요 다시 시도해 주세요
            </div>
          )}
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
