import { Omit } from '../../utils/types/omit.type';

export class PostModel {
  id!: number;
  slug!: string;
  title!: string;
  content!: string;
  htmlContent!: string;
  thumbnail!: string;
  published?: string;
  authorId?: number;
  author?: {
    id: number;
    mobile: string;
    fullname: string;
    avatar?: string;
  };
  createDate!: string;
}

// export class CreatePostData extends Omit(Post, ['id','slug']) {}
export class CreatePostData {
  title?: string;
  content?: string;
  htmlContent?: string;
  thumbnail?: string;
  published?: Date;
}
