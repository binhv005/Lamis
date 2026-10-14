// Portfolio categories — only categories with real photos in newfolder are listed.
const P = '/images/newfolder/albums';

export const portfolioCategories = [
  {
    id: 'beauty',
    label: 'Beauty',
    description: 'Tập trung vào đường nét, thần thái và vẻ đẹp riêng của mỗi người.',
    images: [`${P}/beauty/01.jpg`, `${P}/beauty/02.jpg`, `${P}/beauty/03.jpg`, `${P}/beauty/04.jpg`]
  },
  {
    id: 'concept',
    label: 'Concept',
    description: 'Ý tưởng, trang phục, ánh sáng và bối cảnh được lựa chọn phù hợp.',
    images: [
      `${P}/thien-than/01.webp`,
      `${P}/an-nhien/01.webp`,
      `${P}/trung-thu/01.jpg`,
      `${P}/blossom/03.webp`,
      `${P}/thien-than/03.webp`,
      `${P}/an-nhien/05.webp`,
      `${P}/trung-thu/04.jpg`,
      `${P}/blossom/07.webp`
    ]
  },
  {
    id: 'outdoor',
    label: 'Ngoại cảnh',
    description: 'Khoảnh khắc trong không gian tự nhiên, linh hoạt và giàu cảm xúc.',
    images: [
      `${P}/thanh-xuan/01.jpg`,
      `${P}/thanh-xuan/03.webp`,
      `${P}/thanh-xuan/02.jpg`,
      `${P}/thanh-xuan/05.webp`,
      `${P}/thanh-xuan/04.webp`,
      `${P}/thanh-xuan/06.jpg`
    ]
  }
];
