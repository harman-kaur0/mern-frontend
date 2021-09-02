import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signIn = (form) => API.post("/users/signin", form);
export const signUp = (form) => API.post("/users/signup", form);

