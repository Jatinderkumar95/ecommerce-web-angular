// Error response model for API validation errors
export interface ApiValidationErrorResponse {
  errors: {
    [key: string]: string[];
  };
  type: string;
  title: string;
  status: number;
  traceId: string;
}
export interface ResponseWrapper<T> {
  httpStatusCode: number;
  data: T;
  friendyMessageList: string[];
}