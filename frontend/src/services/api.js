import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-y88t.onrender.com/api/products",
});

export default API;