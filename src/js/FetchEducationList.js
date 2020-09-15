const axios = require("axios");

export const fetchEducationList = async (userId) => {
  const response = await axios.get(
    `http://localhost:8080/users/${userId}/educations`
  );
  return response.data;
};
