import axios from "axios";
import {useNavigate} from "react-router-dom";

const logout = async () => {
  try {
    await axios.post('/api/auth/logout'); // 서버로 로그아웃 요청
    console.log('로그아웃 성공');
    localStorage.removeItem('token');
  } catch (error) {
    console.error('로그아웃 실패', error);
  }
};
export default logout;