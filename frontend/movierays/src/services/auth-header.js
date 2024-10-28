// auth-header.js

export const getAuthHeader = () => {
  const tokenDetails = localStorage.getItem("user");
  const accessToken = tokenDetails ? JSON.parse(tokenDetails).accessToken : null;

  return {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  };
};
