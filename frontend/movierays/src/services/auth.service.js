import axios from "axios";
// import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/user/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", null, { params: { email, password } })
      .then((response) => {
        const token = response.headers["authorization"];

        // Check if token exists and store user data if login is successful
        if (token && response.data && typeof response.data === "object") {
          const accessToken = token.replace("Bearer ", "");
          localStorage.setItem(
            "user",
            JSON.stringify({ ...response.data, accessToken })
          );
        }

        return response.data; // Return user object or error message
      })
      .catch((error) => {
        // Handle error if needed
        throw error.response ? error.response.data : "Login failed";
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  async editProfile(userData) {
    const tokenDetails = localStorage.getItem("user");
    const accessToken = tokenDetails
      ? JSON.parse(tokenDetails).accessToken
      : null;

    // Log the token to ensure it is available
    console.log("Access Token:", accessToken);

    // Create headers object
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    };

    // Log the complete headers
    console.log("Request Headers:", headers);
    try {
      const response = await axios.post(API_URL + "edit-profile", userData, {
        headers,
      });
      return response.data; // Return updated user data
    } catch (error) {
      throw error.response ? error.response.data : "Error updating profile";
    }
  }
}

export default new AuthService();
