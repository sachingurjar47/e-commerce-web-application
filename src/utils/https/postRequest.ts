import { createAxiosInstance } from "./axiosInstance";
import { AxiosRequestConfig, CreateAxiosDefaults } from "axios";
export const postRequest = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
  instancProps?: CreateAxiosDefaults
) => {
  const axiosInstance = createAxiosInstance(instancProps);
  try {
    const response = await axiosInstance.post(url, data, config);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
