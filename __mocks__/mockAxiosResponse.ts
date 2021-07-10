import { AxiosResponse } from "axios";

interface Config extends Partial<Omit<AxiosResponse, "data">> {}

export const mockAxiosResponse = <T>(
  data: T,
  config?: Config
): AxiosResponse<T> => {
  return {
    data,
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
    ...config,
  };
};
