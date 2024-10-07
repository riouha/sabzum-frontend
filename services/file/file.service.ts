import { appConfig } from '../../config/app-config';
import { axiosInstance } from '../../config/axios.instance';
import { IApiResponse } from '../../utils/interfaces/api-response';
import { adminService } from '../admin/admin.service';
import { IFileService } from './file.interface';
import { File, GalleryResult } from './file.model';

class FileService implements IFileService {
  async uploadImage(image: Blob): Promise<IApiResponse<File>> {
    try {
      const data = new FormData();
      data.append('file', image);

      const result = await axiosInstance.post('/admin/file/image', data, {
        headers: {
          Authorization: `Bearer ${adminService.getToken()}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return {
        data: result.data as File,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  async uploadFormData(data: FormData): Promise<IApiResponse<File>> {
    try {
      const result = await axiosInstance.post('/admin/file/image', data, {
        headers: {
          Authorization: `Bearer ${adminService.getToken()}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return {
        data: result.data as File,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  getImageUrl(path: string) {
    return `${appConfig.apiURL}/file/${path}`;
  }

  async getGallery(): Promise<IApiResponse<GalleryResult>> {
    try {
      const result = await axiosInstance.get('/admin/file/gallery', {
        headers: { Authorization: `Bearer ${adminService.getToken()}` },
      });
      return {
        data: result.data as GalleryResult,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  getGalleryUrl() {
    return `${appConfig.apiURL}/admin/file/gallery2`;
  }
}

export const fileService = new FileService();
