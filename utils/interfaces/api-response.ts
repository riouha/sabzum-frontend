export interface IApiResponse<T> {
  data?: T;
  error?: number;
  message?: string;
}
