import React, { useState } from "react";
import * as L from "./Login.style.js";
import logo from "../../asset/img/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import login from "../../hooks/auth/login.js";

function Login() {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log("로그인 시도 중...");
        try {
            const response = await login(name, birth);
            if (response.status === 200) {
                const result = response.data;
                sessionStorage.setItem("name", result.memberName);
                sessionStorage.setItem("role", result.role);
                console.log("로그인 성공, 이름:" + result.memberName);
                if (result.role === "ROLE_ADMIN") {
                    navigate("/admin");
                } else {
                    navigate("/user");
                }
            } else {
                setLoginCheck(true);
            }
        } catch (error) {
            console.error("로그인 요청 중 오류 발생:", error.response.data.message);
            alert(error.response.data.message);
            setLoginCheck(true);
        } finally {
            setLoading(false);
        }
    };

    const handleBirthChange = (event) => {
        const { value } = event.target;
        const formattedValue = formatBirth(value);
        setBirth(formattedValue);
    };

    const formatBirth = (value) => {
        if (/^\d*$/.test(value)) {
            if (value.length === 8) {
                const formattedValue = value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
                return formattedValue;
            }
            return value;
        }
        return birth;
    };

    return (
        <>
            <L.LoginLayout>
                <L.LoginBox>
                    <L.Logo src={logo} alt="Logo" />
                    <L.InputField>
                        <L.InputTitle>이름</L.InputTitle>
                        <L.Input
                            type="text"
                            id="userName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="이름을 입력해주세요"
                            disabled={loading}
                        />
                        <L.InputTitle>생년월일</L.InputTitle>
                        <L.Input
                            type="text"
                            id="userBirth"
                            value={birth}
                            onChange={handleBirthChange}
                            placeholder="생년월일을 입력해주세요"
                            disabled={loading}
                        />
                        <L.Button onClick={handleLogin} type="submit" disabled={loading}>
                            {loading ? "로그인 중..." : "로그인"}
                        </L.Button>
                        <L.GoSignup>
                            계정이 없으신가요?{" "}
                            <Link to="/signup/agree">
                                <L.Singup>회원가입</L.Singup>
                            </Link>
                        </L.GoSignup>
                    </L.InputField>
                </L.LoginBox>
            </L.LoginLayout>
        </>
    );
}

export default Login;