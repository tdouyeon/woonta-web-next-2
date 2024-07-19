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
      introduce:
        '사주와 명리학에 대한 깊은 연구와 오랜 상담 경험을 바탕으로, 여러분의 삶에 관한 중요한 통찰을 제공하고 있습니다. 제 상담은 개인의 사주를 기반으로 하여, 인생의 주요 방향과 운명의 흐름을 명확히 이해하고 조언합니다. 신뢰와 정확성을 바탕으로 여러분의 미래를 밝혀드리겠습니다.',
      reviews: [
        {
          nickname: '호롱이',
          ratingStar: 5,
          reviewTitle: '정확한 분석과 친절한 상담에 감동했습니다.',
          reviewDetail:
            '최근에 민들레 선생님께 사주 상담을 받았는데, 정말 인상 깊었습니다. 상담 전에 제 사주에 대한 기본적인 정보만 알고 있었지만, 민들레 선생님은 제 사주를 깊이 분석해 주셨고, 제 인생의 여러 측면에 대해 구체적이고 실질적인 조언을 해주셨습니다. 특히 저의 직업적인 고민과 인생의 전환점에 대한 조언이 매우 유익했습니다. 상담 내내 따뜻하고 친절한 태도로 대해 주셔서 편안하게 이야기를 나눌 수 있었고, 제 미래에 대한 불안감이 많이 해소되었습니다. 앞으로도 지속적으로 상담을 받을 계획입니다. 정말 감사드립니다!',
          createdAt: '2024-07-07',
        },
        {
          nickname: '하늘구름',
          ratingStar: 5,
          reviewTitle: '사주 상담 덕분에 방향을 찾았습니다',
          reviewDetail:
            '민들레 선생님과의 사주 상담이 제 인생에 큰 전환점을 가져다주었습니다. 여러 가지 고민이 있었던 제 인생에서 사주 상담을 통해 새로운 방향과 목표를 설정할 수 있었습니다. 특히, 저의 현재 상황을 잘 이해하시고, 미래의 가능성에 대해 명확한 조언을 주셨습니다. 상담을 받은 후에는 더 자신감을 가지고 제 일에 임할 수 있게 되었고, 제 미래에 대해 긍정적인 시각을 가지게 되었습니다. 추천합니다!',
          createdAt: '2024-07-09',
        },
      ],
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
