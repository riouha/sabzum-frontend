import { axiosInstance } from '../../config/axios.instance';
import { SearchFilters } from '../../utils/base-classes/search-filters';
import { IApiResponse } from '../../utils/interfaces/api-response';
import { PostModel, CreatePostData } from './post.model';
import { IPostService } from './post.interface';
import { SearchResult } from '../../utils/types/search-result.type';
import { adminService } from '../admin/admin.service';

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
      const result = await axiosInstance.get(`/admin/post/${id}`, {
        headers: { Authorization: `Bearer ${adminService.getToken()}` },
      });
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

  async upsertPost(data: CreatePostData, id?: number): Promise<IApiResponse<PostModel>> {
    try {
      const result =
        id == undefined
          ? await axiosInstance.post('/admin/post', data, {
              headers: { Authorization: `Bearer ${adminService.getToken()}` },
            })
          : await axiosInstance.patch(`/admin/post/${id}`, data, {
              headers: { Authorization: `Bearer ${adminService.getToken()}` },
            });
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
