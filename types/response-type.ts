export interface ResponseType<T> {
  response_code: string;
  response_desc: {
    id: string;
    en: string;
  };
  data: T;
}
