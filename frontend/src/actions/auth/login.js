import apiClient from "../../helpers/apiClient";

const handleLogin = async () => {
  try {
    const res = await apiClient.post("/auth/login");
    return res.data;
  } catch (error) {
    return null;
  }
};

export default handleLogin;
