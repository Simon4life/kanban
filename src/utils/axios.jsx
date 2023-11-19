import axios from "axios";


// https://kanban-api-clone.onrender.com
const CustomFetch = (token = null) => {
  return axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
} 



export default CustomFetch;
