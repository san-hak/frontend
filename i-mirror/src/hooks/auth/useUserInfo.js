import { useState } from "react";
import axios from "axios";

const useUserInfo = () => {
  const [error, setError] = useState(null);

  const getUserList = async ({ page, size }) => {
    try {
      const { data } = await axios.get(`/api/user?page=${page}&size=${size}`);
      return data;
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
      console.error("Error fetching user:", error);
      return null;
    }
  };

  return { getUserList, error };
};

export default useUserInfo;
