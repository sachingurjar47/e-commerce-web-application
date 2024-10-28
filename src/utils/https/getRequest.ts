import { createAxiosInstance } from "./axiosInstance";
import { AxiosRequestConfig, CreateAxiosDefaults } from "axios";
export const getRequest = async (
  url: string,
  config?: AxiosRequestConfig<any> | undefined,
  instancProps?: CreateAxiosDefaults
) => {
  const axiosInstance = createAxiosInstance(instancProps);
  try {
    const response = await axiosInstance.get(url, config);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
