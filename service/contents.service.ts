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

const getloveResult = ({
  gender,
  duration,
  ilgan,
}: {
  gender: string;
  duration: number;
  ilgan: string;
}) => {
  console.log(gender, duration, ilgan);
  return http.post(`/sazu/love`, {
    gender,
    duration,
    ilgan,
  });
};

const getGunghapResult = (
  birth: {
    yyyy: string;
    MM: string;
    dd: string;
    hh: string;
    mm: string;
  }[],
) => {
  return http.post(`/sazu/gunghap`, {
    birth1: {
      yyyy: birth[0].yyyy,
      mm: birth[0].MM,
      day: birth[0].dd,
      hour: birth[0].hh,
      min: birth[0].mm,
    },
    birth2: {
      yyyy: birth[1].yyyy,
      mm: birth[1].MM,
      day: birth[1].dd,
      hour: birth[1].hh,
      min: birth[1].mm,
    },
  });
};

const contentsService = { getMbtiTestResult, getloveResult, getGunghapResult };

export default contentsService;
