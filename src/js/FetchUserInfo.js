const axios = require("axios");

export const fetchUserInfo = async (userId) => {
  const response = await axios.get(`http://localhost:8080/users/${userId}`);
  return response.data;
};
