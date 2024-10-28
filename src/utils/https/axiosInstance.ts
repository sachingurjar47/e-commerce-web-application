import axios, { CreateAxiosDefaults } from "axios";
const baseURL = process.env.REACT_APP_API_URL;
export const createAxiosInstance = (props?: CreateAxiosDefaults) => {
  return axios.create({
    baseURL,
    timeout: 10000,
    ...props,
    headers: {
      "Content-Type": "application/json", // Default content type
      ...props?.headers, // Merge any additional headers provided
    },
  });
};
