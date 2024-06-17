import axios from "axios";

export const signup = async (signupData) => {
    try {
        const response = await axios.post("/api/auth/register", signupData, { withCredentials: true });
        return response;
    } catch (error) {
        throw error;
    }
};
export default signup;