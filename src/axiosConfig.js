import axios from "axios";
const axiosBase = axios.create({
  
  baseURL: "http://localhost:2001/api",
});
export default axiosBase;
