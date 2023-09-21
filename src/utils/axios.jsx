import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const user = getUserFromLocalStorage();
let token ;
if (!user) {
  token = undefined
} else {
  token = user.token;
  
}

const CustomFetch = axios.create({
  baseURL: "https://kanban-api-clone.onrender.com",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});



export default CustomFetch;
