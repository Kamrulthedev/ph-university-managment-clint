export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: string;
};

export type Tmeta = {
  limit: number;
  page: number;
  total: boolean;
  totalPage: number;
};

export type TResponce = {
  data?: any;
  error: TError;
  meta?: Tmeta;
  success:boolean,
  message: string
};
