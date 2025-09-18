export type ApiResponse<T> =
  | { result: T; error?: undefined; message?: undefined }
  | { result?: undefined; error: number; message: string };
