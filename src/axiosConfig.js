import axios from "axios";
const axiosBase = axios.create({
  
  // baseURL: "http://localhost:2001/api",
  // baseURL: "https://https://birhanu-final.cyclic.app/api",
  baseURL:"https://difficult-train-clam.cyclic.app/api"
});
export default axiosBase;

