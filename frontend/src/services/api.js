import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-rpaj.onrender.com",
});

export default API;