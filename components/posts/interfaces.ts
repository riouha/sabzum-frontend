export interface IPost {
  id: number;
  slug: string;
  title: string;
  image?: string;
  author: {
    id: string | number;
    title: string;
    avatar?: string;
  };
  date: string;
  category: string;
  content?: string;
  htmlContent?: string;
  link?: string;
}
