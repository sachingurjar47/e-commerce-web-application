import { createAxiosInstance } from "./axiosInstance";
import { AxiosRequestConfig, CreateAxiosDefaults } from "axios";
export const deleteRequest = async (
  url: string,
  config?: AxiosRequestConfig,
  instancProps?: CreateAxiosDefaults
) => {
  const axiosInstance = createAxiosInstance(instancProps);
  try {
    const response = await axiosInstance.delete(url, config);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
