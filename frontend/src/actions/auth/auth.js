import toast from "react-hot-toast";
import apiClient from "../../helpers/apiClient";

export const handleLogin = async (data) => {
  try {
    const res = await apiClient("/auth/login", "POST", data);
    return res.data;
  } catch (error) {
    toast.error("Telefon raqam yoki parol xato!");
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
