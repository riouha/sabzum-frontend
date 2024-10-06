import { appConfig } from '../../config/app-config';
import { axiosInstance } from '../../config/axios.instance';
import { IApiResponse } from '../../utils/interfaces/api-response';
import { IFileService } from './file.interface';
import { File, GalleryResult } from './file.model';

class FileService implements IFileService {
  async uploadImage(image: Blob): Promise<IApiResponse<File>> {
    try {
      const data = new FormData();
      data.append('file', image);

      const result = await axiosInstance.post('/file/image', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
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
      const result = await axiosInstance.post('/file/image', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
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
      const result = await axiosInstance.get('/file/gallery');
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
    return `${appConfig.apiURL}/file/gallery`;
  }
}

export const fileService = new FileService();
