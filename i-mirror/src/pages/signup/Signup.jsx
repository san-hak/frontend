import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Signup.style.js";
import { Link } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const handleNextButtonClick = () => {
        navigate('/')
    };
    return (
        <S.SignupLayout>
            <S.SignupBox>
                <S.InputField>
                    <S.InputTitle>아이디</S.InputTitle>
                    <S.Input type="text" placeholder="4~15자리 / 영문, 숫자 조합"></S.Input>
                    <S.InputTitle>비밀번호</S.InputTitle>
                    <S.Input type="password" placeholder="비밀번호를 입력해주세요"></S.Input>
                    <S.Input type="password" placeholder="비밀번호를 입력해주세요"></S.Input>
                    <S.InputTitle>이름</S.InputTitle>
                    <S.Input type="password" placeholder="성을 포함한 실명"></S.Input>
                    <S.InputTitle>생년월일</S.InputTitle>
                    <S.Input type="password" placeholder="YYYYMMDD"></S.Input>
                    <S.Button type="submit" onClik={handleNextButtonClick}>회원가입</S.Button>
                    <S.GoLogin>이미 계정이 있으신가요?<Link to="/"><S.Login>로그인</S.Login></Link></S.GoLogin>
                </S.InputField>
            </S.SignupBox>
        </S.SignupLayout>
    );
}
export default Signup;