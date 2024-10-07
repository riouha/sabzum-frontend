export interface IPost {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  author: {
    id: string | number;
    fullname: string;
    avatar?: string;
  };
  date: string;
  category: string;
  content?: string;
  htmlContent?: string;
  link?: string;
}
