
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', // Replace with your API base URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
}); // Create the axios instance

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    console.log('Interceptor is running',config)
    // Do something before the request is sent
    // For example, add an authentication token to the headers
    const token = localStorage.getItem('authToken'); // taking auth token from local Storage
     if (token) {
        debugger
      config.headers.Authorization = `Bearer ${token}`;
    }else{
         console.log('Interceptor is running but no token')
    }
    return config;

  },
  function (error) {
    // Handle the error
    return Promise.reject(error);
  }
);

export default axiosInstance;