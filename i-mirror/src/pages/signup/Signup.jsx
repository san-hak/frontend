import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Signup.style.js";
import { Link } from "react-router-dom";
import logo from "../../asset/img/Logo.svg";

function Signup() {
    const navigate = useNavigate();

    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState(null);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const validateBirthdate = (birthdate) => {
        const birthdateRegex = /^\d{8}$/;
        return birthdateRegex.test(birthdate);
    };

    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
        setErrors((prev) => ({ ...prev, birthdate: !validateBirthdate(e.target.value) }));
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value === "male");
    };

    const validateName = (name) => {
        const nameRegex = /^[가-힣]{3,4}$/;
        return nameRegex.test(name);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setErrors((prev) => ({ ...prev, name: !validateName(e.target.value) }));
    };

    const handleSignup = () => {
        if (!errors.birthdate && gender !== null && !errors.name) {
            // 서버로 보낼 데이터 예시
            const signupData = {
                birthdate,
                gender,
                name,
            };
            console.log("회원가입 데이터:", signupData);
            // 여기에 실제 회원가입 API 호출 로직을 추가하세요
            navigate("/");
        } else {
            alert("모든 입력 값을 확인해주세요.");
        }
    };
    return (
        <S.SignupLayout>
            <S.SignupBox>
                <S.Logo src={logo}></S.Logo>
                <S.InputField>
                    {/* <S.InputTitle>아이디</S.InputTitle>
                    <S.Inputs>
                        <S.Input type="text" placeholder="4~15자리 / 영문, 숫자 조합"></S.Input>
                        <S.CheckButton type="button" /* onClick={checkIdAvailability} >중복 확인</S.CheckButton>
                    </S.Inputs>
                    <S.InputTitle>비밀번호</S.InputTitle>
                    <S.Input type="password" placeholder="8~16자리 / 영문, 숫자, 특수문자 조합"></S.Input>
                    <S.Input type="password" placeholder="비밀번호 확인"></S.Input> */}
                    <S.Inputs>
                        <S.InputTitles>이름</S.InputTitles>
                        <S.InputTitles>성별</S.InputTitles>
                    </S.Inputs>
                    <S.Inputs>
                        <S.Input type="text" placeholder="성을 포함한 실명"></S.Input>
                        <S.RadioGroup>
                            <S.RadioLabel>
                                <S.RadioInput
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={gender === true}
                                    onChange={handleGenderChange}
                                />
                                <S.RadioCustom />
                                남자
                            </S.RadioLabel>
                            <S.RadioLabel>
                                <S.RadioInput
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={gender === false}
                                    onChange={handleGenderChange}
                                />
                                <S.RadioCustom />
                                여자
                            </S.RadioLabel>
                        </S.RadioGroup>
                    </S.Inputs>
                    {errors.name && <S.ErrorMessage>이름은 한글 3~4글자여야 합니다.</S.ErrorMessage>}
                    <S.InputTitle value={birthdate} onChange={handleBirthdateChange}>생년월일</S.InputTitle>
                    <S.Input type="text" placeholder="YYYYMMDD" maxLength="8"></S.Input>
                    {errors.birthdate && <S.ErrorMessage>생년월일은 6자리 숫자여야 합니다.</S.ErrorMessage>}
                    <S.Button type="submit" onClick={handleSignup}>회원가입</S.Button>
                    <S.GoLogin>이미 계정이 있으신가요?<Link to="/"><S.Login>로그인</S.Login></Link></S.GoLogin>
                </S.InputField>
            </S.SignupBox>
        </S.SignupLayout>
    );
}
export default Signup;