// import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080/api/",
// });

// // Adding a request interceptor to include the Authorization token
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Retrieve the token details from localStorage
//     const tokenDetails = localStorage.getItem("user");
//     console.log("tokenDetails:", tokenDetails);

//     if (tokenDetails) {
//       // Parse the string to get the object
//       const parsedTokenDetails = JSON.parse(tokenDetails);

//       // Access the accessToken property
//       const token = parsedTokenDetails.accessToken;
//       console.log("Access token from localStorage:", token);

//       // Set the Authorization header if the token is present
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config; // Always return the config object
//   },
//   (error) => {
//     return Promise.reject(error); // Handle the error if needed
//   }
// );

// export default axiosInstance;
