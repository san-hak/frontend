import axios from "axios";

const useCheckup = () => {
  const getCheckup = async () => {
    try {
      const { data } = await axios.get(`/api/admin/checkup/[name]/[birth]`);
      return data;
    } catch (error) {
      return console.error("Error fetching patients:", error);
      throw error;
    }
  };
  return { getCheckup };
};

export default useCheckup;
