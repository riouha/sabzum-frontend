import { axiosInstance } from '../../config/axios.instance';
import { SearchFilters } from '../../utils/base-classes/search-filters';
import { IApiResponse } from '../../utils/interfaces/api-response';
import { PostModel, CreatePostData } from './post.model';
import { IPostService } from './post.interface';
import { SearchResult } from '../../utils/types/search-result.type';

class PostService implements IPostService {
  async getPosts(): Promise<IApiResponse<{ posts: PostModel[] }>> {
    try {
      const result = await axiosInstance.get('/post');
      return {
        data: { posts: result.data },
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }
  async searchPosts(filters: SearchFilters): Promise<IApiResponse<SearchResult<{ posts: PostModel[] }>>> {
    try {
      const result = await axiosInstance.get('/post');
      return {
        data: { count: result.data.count, posts: result.data.posts },
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  async getPostBySlug(slug: string): Promise<IApiResponse<PostModel>> {
    try {
      const result = await axiosInstance.get(`/post/${slug}`);
      return {
        data: result.data as PostModel,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  async getPost(id: number): Promise<IApiResponse<PostModel>> {
    try {
      const result = await axiosInstance.get(`/post/${id}`);
      return {
        data: result.data as PostModel,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  async addPost(data: CreatePostData): Promise<IApiResponse<PostModel>> {
    try {
      const result = await axiosInstance.post('/post', data);
      return {
        data: result.data as PostModel,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }
}

export const postService = new PostService();
