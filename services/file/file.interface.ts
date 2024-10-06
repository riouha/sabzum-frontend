import { IApiResponse } from '../../utils/interfaces/api-response';
import { File, GalleryResult } from './file.model';

export interface IFileService {
  uploadImage: (image: Blob) => Promise<IApiResponse<File>>;
  uploadFormData: (data: FormData) => Promise<IApiResponse<File>>;
  getGallery: () => Promise<IApiResponse<GalleryResult>>;
  getImageUrl: (path: string) => string;
  getGalleryUrl: () => string;
}
