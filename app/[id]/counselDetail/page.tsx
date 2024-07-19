'use client';
import { useEffect, useState } from 'react';
import counselService from '@/service/counsel.service';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import LinkArrowBox from '@/components/LinkArrowBox';

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

  const reviewCompo = () => {
    const preReviews = [counselInfo?.reviews[0], counselInfo?.reviews[1]];
    return (
      <div className="flex flex-col justify-between overflow-hidden">
        {preReviews.map((review) => (
          <div className="flex-1 divide-gray-300 rounded-lg overflow-hidden shadow-md bg-white p-4 m-1 text-ellipsis max-h-[250px]">
            <div className="flex flex-row justify-between">
              <div className="text-primary ">{review.nickname}</div>
              <div className="text-gray-300 font-light">{review.createdAt}</div>
            </div>
            <div className="text-primary pt-2 font-bold pb-1">
              "{review.reviewTitle}"
            </div>
            <div className="text-primary overflow-hidden line-clamp-3">
              {review.reviewDetail}
            </div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    setCounselDetail();
  }, []);

  return (
    <main className="flex-grow h-screen flex justify-center">
      <div className="bg-baseBG w-[100vw] 420px:w-420">
        <PageHeader name={`${counselInfo?.name} 선생님`} />

        <div className="flex bg-baseBG min-h-[95vh] flex-col">
          <div className="font-semibold w-[100vw] 420px:w-420 h-[350px]">
            <Image
              src="/images/model.png"
              alt="Logo"
              width={420}
              height={420}
              className="object-cover"
            />
          </div>
          <div className=" p-4 bg-white py-4 w-[100vw] 420px:w-420">
            <div className="text-primary text-xl font-semibold">
              {counselInfo?.name} 선생님
            </div>
            <div className="flex">
              <Image
                src="/images/pin.png"
                alt="Logo"
                width={18}
                height={20}
                className="object-contain"
              />
              <div className="text-gray-400">{counselInfo?.region}</div>
            </div>
            <div className="text-primary text-xl font-semibold">
              {counselInfo?.price}
            </div>
          </div>
          {counselInfo?.reviews && (
            <div className="w-[100vw] 420px:w-420 mt-2 bg-white p-4">
              <LinkArrowBox title="상담 후기" uri={'/reviewList'} />
              {reviewCompo()}
            </div>
          )}
          <div className=" p-4 mt-2 bg-white flex justify-center flex-col">
            <div className="text-primary text-xl font-semibold">
              서비스 소개
            </div>
            <div className="flex flex-col items-center pt-2 p-5">
              <div className="text-gray-400 mb-4">{counselInfo?.introduce}</div>
              <Image
                src="/images/sazu.png"
                alt="Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
