export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: string;
};

export type TResponce = {
  data?: any;
  error: TError;
};
