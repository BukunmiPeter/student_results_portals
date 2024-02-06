import axios from "axios";

const API = axios.create({ baseURL: "https://dummyjson.com/products" });

export const getProducts =() => API.get("/", });
// export const getProducts = () => API.get("/", { params: { limit: 10, skip: 10, select: "title,price" } });

export const getProduct = ()=> API.get(`/${id}`);