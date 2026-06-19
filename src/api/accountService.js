import axios from "axios";

const BASE_URL = "http://localhost:8081";

export const getAccountDetails = (userId) => {
  return axios.get(
    `${BASE_URL}/accounts/details/${userId}`
  );
};
