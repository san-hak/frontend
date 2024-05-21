import React from "react";
import * as L from "./Login.style.js";
import logo from "../../asset/img/Logo.svg";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <L.LoginLayout>
                <L.LoginBox>
                    <L.Logo src={logo}></L.Logo>
                    <L.InputField>
                        <L.InputTitle>이름</L.InputTitle>
                        <L.Input type="text" placeholder="이름을 입력해주세요"></L.Input>
                        <L.InputTitle>생년월일</L.InputTitle>
                        <L.Input type="password" placeholder="생년월일을 입력해주세요"></L.Input>
                        <L.Button type="submit">로그인</L.Button>
                        <L.GoSignup>계정이 없으신가요? <Link to="/signup/agree"><L.Singup>회원가입</L.Singup></Link></L.GoSignup>
                    </L.InputField>
                </L.LoginBox>
            </L.LoginLayout>
        </>
    );
}
export default Login;