const getCounselList = () => {
  const mockResponseArr = [
    {
      id: 1,
      name: '민들레',
      region: '경남 양산',
      price: '35,000',
    },
    {
      id: 2,
      name: '달래',
      region: '인천 송도',
      price: '50,000',
    },
    {
      id: 3,
      name: '소리',
      region: '경기 성남',
      price: '70,000',
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockResponseArr);
    }, 500);
  });
};

const getCounselDetail = (id: number) => {
  const mockResponseArr = [
    {
      name: '민들레',
      region: '경남 양산',
      price: '35,000',
      introduce: '안녕하세요, 반갑습니다. 민들레입니다.',
    },
    {
      name: '달래',
      region: '인천 송도',
      price: '50,000',
      introduce: '안녕하세요, 반갑습니다. 달래입니다.',
    },
    {
      name: '소리',
      region: '경기 성남',
      price: '70,000',
      introduce: '안녕하세요, 반갑습니다. 소리입니다.',
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockResponseArr[id - 1]);
    }, 500);
  });
};

const counselService = {
  getCounselList,
  getCounselDetail,
};

export default counselService;
