import axios from "axios";

const useUser = () => {
  const getPatientList = async ({ page, size }) => {
    const { data } = await axios.get(
      "http://10.80.162.0:8080" + `/api/admin?page=${page}&size=${size}`
    );
    console.log(data);
    return data;
  };
  console.log(getPatientList);
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
