import axios from "axios";

const useCheckup = () => {
  const getCheckup = async (name, birth) => {
    try {
      const { data } = await axios.get(`/api/admin/checkup/${name}/${birth}`);
      return data;
    } catch (error) {
      console.error("Error fetching checkup:", error);
      throw error;
    }
  };
  return { getCheckup };
};

export default useCheckup;
