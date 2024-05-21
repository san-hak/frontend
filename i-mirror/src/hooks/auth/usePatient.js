import axios from "axios";

const useUser = () => {
  const getPatientList = async ({ page, size }) => {
    const { data } = await axios.get(
      "http://13.125.31.54/:8080" + `/api/admin?page=${page}&size=${size}`
    );
    return data;
  };

  return { getPatientList };
};

export default useUser;

// import axios from "axios";

// const useUser = () => {
//   const getPatientList = async () => {
//     try {
//       const { data } = await axios.get("http://10.80.163.9:8080/api/admin");
//       return data;
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//       return [];
//     }
//   };

//   return { getPatientList };
// };

// export default useUser;
