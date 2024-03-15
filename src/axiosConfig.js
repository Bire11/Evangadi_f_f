import axios from "axios";
const axiosBase = axios.create({
  
  // baseURL: "http://localhost:2001/api",
  baseURL: "https://birhanu-final.cyclic.app/api",
});
export default axiosBase;

