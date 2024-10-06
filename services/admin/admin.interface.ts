import { IApiResponse } from '../../utils/interfaces/api-response';
import { Admin, LoginAdmin, SignupAdmin } from './admin.model';

export interface IAdminService {
  login: (data: LoginAdmin) => Promise<IApiResponse<{ access_token: string; admin: Admin }>>;
  create: (data: SignupAdmin) => Promise<IApiResponse<Admin>>;
  getAll: () => Promise<IApiResponse<Admin[]>>;
}
