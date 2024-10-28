import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
const baseURL = process.env.REACT_APP_API_URL;
export const useAxiosInstance = (
  props?: CreateAxiosDefaults
): { axiosInstance: AxiosInstance } => {
  const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
    ...props,
  });
  return { axiosInstance };
};
