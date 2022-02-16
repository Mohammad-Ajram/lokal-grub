import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

export const getData = async () => {
  return await axios.post("/mymenu-data");
};
