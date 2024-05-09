import React from "react";
import * as L from "./Login.style.js";
import logo from "../../asset/img/Logo.svg";

function Login() {
    return (
        <>
            <L.LoginLayout>
                <L.LoginBox>
                    <L.Logo src={logo}></L.Logo>
                    <L.InputField>
                        <L.InputTitle>아이디</L.InputTitle>
                        <L.Input type="text" placeholder="아이디를 입력해주세요"></L.Input>
                        <L.InputTitle>비밀번호</L.InputTitle>
                        <L.Input type="password" placeholder="비밀번호를 입력해주세요"></L.Input>
                        <L.Button type="submit">로그인</L.Button>
                    </L.InputField>
                </L.LoginBox>
            </L.LoginLayout>
        </>
    );
}
export default Login;