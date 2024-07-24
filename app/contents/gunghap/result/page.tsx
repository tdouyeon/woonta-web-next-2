'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

interface Result {
  gunghapScore: GunghapScore;
  palza: Palze;
  rScore: string;
  message: string;
}

interface GunghapScore {
  ilganHapScore: score;
  samhapScore: score;
  yukhapScore: score;
  banghapScore: score;
  hyungChoongPaHaeScore: number;
  totalScore: number;
}

interface score {
  score: number;
  grade: string;
}

interface Palze {
  birth1: PalzeResult;
  birth2: PalzeResult;
}

interface PalzeResult {
  cheongan: string;
  jiiijiii: string;
}

export default function ResultPage() {
  const [result, setResult] = useState<Result>();
  const searchParams = useSearchParams();
  const dataString = searchParams.get('data');

  const getQueryString = () => {
    if (dataString) {
      try {
        const result = JSON.parse(decodeURIComponent(dataString));
        setResult(result);
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
        <PageHeader name={'궁합 결과'} />
        <div className="flex-1 mx-6 mt-[15vh] 420px:mt-[20vh]">
          <div className="text-primary text-center text-xl font-semibold ">
            사주를 바탕으로 예상되는
            <br />
            궁합점수를 알려드릴게요.
          </div>
          {result?.gunghapScore ? (
            <div className="text-primary p-2 flex flex-col text-center">
              <div className="text-gray-500 text-lg mt-6">궁합 점수</div>
              <div>
                <span className="text-main text-4xl font-bold">
                  {result.gunghapScore.totalScore}
                </span>
                <span>점</span>
              </div>
              <div className="flex justify-around mt-2">
                <div>
                  <div className="text-gray-500 text-lg mt-6">철학</div>
                  <div>
                    <span className="text-main text-3xl font-bold">
                      {result.gunghapScore.ilganHapScore.grade}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-lg mt-6">팀워크</div>
                  <div>
                    <span className="text-main text-3xl font-bold">
                      {result.gunghapScore.samhapScore.grade}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-lg mt-6">신체</div>
                  <div>
                    <span className="text-main text-3xl font-bold">
                      {result.gunghapScore.yukhapScore.grade}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-lg mt-6">공감</div>
                  <div>
                    <span className="text-main text-3xl font-bold">
                      {result.gunghapScore.banghapScore.grade}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-2xl font-semibold"></span>
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
