import axios from "axios";

export const login = async (name, birth) => {
  try {
    const response = await axios.post("/api/auth/login", {
      memberName: name,
      memberBirthDate: birth,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
export default login;