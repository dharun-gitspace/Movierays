export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // Return the Authorization header with the token
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
