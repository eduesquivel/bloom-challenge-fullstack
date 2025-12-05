export type Brand = {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  faqs?: {
    question: string,
    answer: string,
  }[]
};
