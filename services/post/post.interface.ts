import { SearchFilters } from '../../utils/base-classes/search-filters';
import { PostModel, CreatePostData } from './post.model';
import { SearchResult } from '../../utils/types/search-result.type';
import { IApiResponse } from '../../utils/interfaces/api-response';

export interface IPostService {
  searchPosts: (filters: SearchFilters) => Promise<IApiResponse<SearchResult<{ posts: PostModel[] }>>>;
  getPost: (id: number) => Promise<IApiResponse<PostModel>>;
  getPostBySlug: (slug: string) => Promise<IApiResponse<PostModel>>;
  upsertPost: (data: CreatePostData) => Promise<IApiResponse<PostModel>>;
}
