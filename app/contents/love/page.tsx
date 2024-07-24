'use client';
import PageHeader from '@/components/PageHeader';
import contentsService from '@/service/contents.service';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import RadioButton from '@/components/RadioButton';

export default function lovePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    gender: 'M',
    duration: 1,
    ilgan: '갑',
  });

  const getDuration = (start: number, end: number) => {
    const durations = [];
    for (let duration = start; duration <= end; duration++) {
      durations.push(duration.toString());
    }
    return durations;
  };

  const durations = getDuration(1, 20);
  const ilgans = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];

  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await contentsService.getloveResult(formData);
      console.log(response.data, 'djelqhwk');
      const queryString = `data=${encodeURIComponent(
        JSON.stringify(response.data),
      )}`;
      router.push(`/contents/love/result?${queryString}`);
    } catch (e) {
      console.log(e, 'getloveResult error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex-grow h-screen flex justify-center`}
    >
      <div className="w-[100vw] 420px:w-420 bg-white flex flex-col overflow-hidden">
        <PageHeader name={'연애/결혼운'} />
        <div className="flex-1 mx-6 mt-[25vh] 420px:mt-[30vh]">
          <div className="text-primary text-center text-2xl font-bold">
            연애/결혼운 테스트 💑
          </div>
          <div className="text-primary text-center text-primary font-samibold my-2">
            입력 정보를 기반으로 <br />
            올해부터 연도별 연애/결혼운을 예측해볼게요!
          </div>
          <div>
            <div className="flex flex-col justify-between items-center mt-10">
              <div className="flex w-[80%] justify-between mb-3 items-center">
                <div className="text-primary text-gray-500 w-[100px]">성별</div>
                <div className="flex w-[140px] justify-between">
                  <RadioButton
                    label="남성"
                    name="gender"
                    value="M"
                    checked={formData.gender === 'M'}
                    onChange={handleChangeRadio}
                  />
                  <RadioButton
                    label="여성"
                    name="gender"
                    value="W"
                    checked={formData.gender === 'W'}
                    onChange={handleChangeRadio}
                  />
                </div>
              </div>
              <div className="flex w-[80%] justify-between mb-3 items-center">
                <div className="text-primary text-gray-500 w-[100px]">
                  조회기간
                </div>
                <select
                  id="duration"
                  inputMode="text"
                  onChange={(e) => handleChange('duration', e.target.value)}
                  className="select my-1 w-[140px]"
                >
                  {durations.map((duration, index) => (
                    <option key={index} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex w-[80%] justify-between items-center">
                <div className="text-primary text-gray-500 w-[100px]">일간</div>
                <select
                  id="ilgan"
                  inputMode="text"
                  onChange={(e) => handleChange('ilgan', e.target.value)}
                  className="select my-1 w-[140px]"
                >
                  {ilgans.map((ilgan, index) => (
                    <option key={index} value={ilgan}>
                      {ilgan}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <button className="bottom-button">확인</button>
      </div>
    </form>
  );
}
