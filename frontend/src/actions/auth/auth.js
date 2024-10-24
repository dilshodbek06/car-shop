import toast from "react-hot-toast";
import apiClient from "../../helpers/apiClient";

export const handleLogin = async (data) => {
  try {
    const res = await apiClient("/auth/login", "POST", data);
    return res.data;
  } catch (error) {
    toast.error("Phone or password is wrong!");
    return null;
  }
};

export const handleRegister = async (data) => {
  try {
    const res = await apiClient("/auth/register", "POST", data);
    return res.data;
  } catch (error) {
    return null;
  }
};
