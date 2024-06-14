import { useState } from "react";
import axios from "axios";

const useUser = () => {
  const [error, setError] = useState(null);

  const getPatientList = async ({ page, size }) => {
    try {
      const { data } = await axios.get(`/api/admin?page=${page}&size=${size}`, {
        headers: {
          Cookies: "SESSION=ZDhmOTI4YjgtZTk3MC00YWFlLTk5YzQtNjYxZTNhNDk1MTBk",
        },
      });
      return data;
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
      console.error("Error fetching patients:", error);
      return { content: [], totalPages: 0 };
    }
  };

  return { getPatientList, error };
};

export default useUser;
