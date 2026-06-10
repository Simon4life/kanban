import axios from "axios";


// https://kanban-api-clone.onrender.com
const CustomFetch = (token = null) => {
  return axios.create({
    baseURL: "https://kanban-api-6bx9.onrender.com/api/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
} 



export default CustomFetch;
