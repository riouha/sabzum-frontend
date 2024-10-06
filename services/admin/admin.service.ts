import { appConfig } from '../../config/app-config';
import { axiosInstance } from '../../config/axios.instance';
import { IApiResponse } from '../../utils/interfaces/api-response';
import { IAdminService } from './admin.interface';
import { LoginAdmin, Admin, SignupAdmin } from './admin.model';

class AdminService implements IAdminService {
  async login(data: LoginAdmin): Promise<IApiResponse<{ access_token: string; admin: Admin }>> {
    try {
      const result = await axiosInstance.post('/admin/auth/login', data);
      return {
        data: result.data,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: Array.isArray(err.response?.data?.message)
          ? err.response.data.message[0]
          : err.response?.data?.message ?? err.response?.message ?? err.message,
      };
    }
  }

  async create(data: SignupAdmin): Promise<IApiResponse<Admin>> {
    try {
      const result = await axiosInstance.post('/admin/create', data, {
        headers: { Authorization: `Bearer ${this.getToken()}` },
      });
      return {
        data: result.data,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  async getAll(): Promise<IApiResponse<Admin[]>> {
    try {
      const result = await axiosInstance.get('/admin/list', {
        headers: { Authorization: `Bearer ${this.getToken()}` },
      });
      return {
        data: result.data,
      };
    } catch (err: any) {
      return {
        error: err.response ? err.response.status : 500,
        message: err.message,
      };
    }
  }

  setToken(token: string) {
    localStorage.setItem('sabzumat', token);
  }
  getToken() {
    return localStorage.getItem('sabzumat');
  }
}

export const adminService = new AdminService();
