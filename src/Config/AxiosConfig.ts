import axios from "axios";

export const setAxiosDefault = () => {
  axios.defaults.baseURL = "http://localhost:8088/v1";
};
