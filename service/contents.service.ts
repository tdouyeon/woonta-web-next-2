import http from './http';

const getMbtiTestResult = ({
  yyyy,
  MM,
  dd,
  hh,
  mm,
}: {
  yyyy: string;
  MM: string;
  dd: string;
  hh: string;
  mm: string;
}) => {
  return http.post(`/sazu/mbti`, {
    birth: { yyyy, mm: MM, day: dd, hour: hh, min: mm },
  });
};

const contentsService = { getMbtiTestResult };

export default contentsService;
