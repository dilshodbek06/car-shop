import apiClient from "../../helpers/apiClient";

const handleRegister = async () => {
  try {
    const res = await apiClient.post("/auth/register");
    return res.data;
  } catch (error) {
    return null;
  }
};

export default handleRegister;
