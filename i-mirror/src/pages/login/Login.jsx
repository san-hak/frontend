import React, { useState } from "react";
import * as L from "./Login.style.js";
import logo from "../../asset/img/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        console.log("로그인 시도 중...")

        try {
            const response = await axios.post(
                "http://10.80.162.0:8080/api/auth/login",
                {
                    memberName: name,
                    memberBirthDate: birth,
                }
            );
            console.log("중간 체크")
            if (response.status === 200) {
                const result = response.data;
                setLoginCheck(false);
                sessionStorage.setItem("name", result.memberName);
                sessionStorage.setItem("role", result.role);
                sessionStorage.setItem("sessionId", result.sessionId);
                console.log("로그인성공, 이름:" + result.memberName);
                // navigate("/main");
            } else {
                setLoginCheck(true);
                console.log("이게 뭐지? : ", response.status);
            }
        } catch (error) {
            console.error("로그인 요청 중 오류 발생:", error);
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
                    <L.Logo src={logo}></L.Logo>
                    <L.InputField>
                        <L.InputTitle>이름</L.InputTitle>
                        <L.Input type="text" id="userName" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력해주세요"></L.Input>
                        <L.InputTitle>생년월일</L.InputTitle>
                        <L.Input type="text" id="userBirth" value={birth} onChange={handleBirthChange} placeholder="생년월일을 입력해주세요"></L.Input>
                        <L.Button onClick={handleLogin} type="submit">로그인</L.Button>
                        <L.GoSignup>계정이 없으신가요? <Link to="/signup/agree"><L.Singup>회원가입</L.Singup></Link></L.GoSignup>
                    </L.InputField>
                </L.LoginBox>
            </L.LoginLayout>
        </>
    );
}
export default Login;