import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1";

export const login = async (loginId, password) => {
return axios.post(`${API_BASE_URL}/login`, {
  loginId,
  password
});
};