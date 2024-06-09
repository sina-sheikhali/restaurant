// app/client.js
import axios from "axios";
import baseURL from "./baseUrl";


export const client = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// client.interceptors.response.use(
//   (response) => {
//     // عملیات برای پاسخ موفقیت‌آمیز
//     if (response.status === 201) {
//       toast.success("Successful operation");
//     }
//     return response;
//   },
//   (error) => {
//     // عملیات برای پاسخ ناموفق
//     if (error.response && error.response.status) {
//       toast.error("Operation failed");
//     }
//     return Promise.reject(error);
//   }
// );
