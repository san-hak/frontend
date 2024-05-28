import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Signup.style.js";
import { Link } from "react-router-dom";
import logo from "../../asset/img/Logo.svg";
import axios from "axios";

function Signup() {
    const navigate = useNavigate();

    const [birthdate, setBirthDate] = useState("");
    const [gender, setGender] = useState(true);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const handleBirthChange = (e) => {
        const { value } = e.target;
        const formattedValue = formatBirth(value);
        setBirthDate(formattedValue);
        setErrors((prev) => ({ ...prev, birthdate: !validateBirth(e.target.value) }));
    };

    const formatBirth = (value) => {
        if (/^\d*$/.test(value)) {
            if (value.length === 8) {
                const formattedValue = value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
                return formattedValue;
            }
            return value;
        }
        return birthdate;
    };

    const validateBirth = (value) => {
        if (value.length != 8) {
            return false;
        }
        return true;
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value === "male");
    };

    const validateName = (name) => {
        const nameRegex = /^[가-힣]{2,4}$/;
        return nameRegex.test(name);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setErrors((prev) => ({ ...prev, name: !validateName(e.target.value) }));
    };

    const handleSignup = async () => {
        if (!errors.name && !errors.birthdate) {
            const signupData = {
                memberName: name,
                isMale: gender,
                memberBirthDate: birthdate,
                personalInfoConsent: true,
            };

            try {
                const response = await axios.post("http://10.80.162.0:8080/api/auth/register", signupData);
                if (response.status === 201) {
                    console.log("회원가입 성공:", response.data);
                    navigate("/");
                } else {
                    alert("오류가 발생했습니다. 다시 할까말까?");
                }
            } catch (error) {
                console.error("회원가입 요청 중 오류 발생:", error);
                alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
            }
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
                        <S.Input type="text" id="userName" value={name} onChange={handleNameChange} placeholder="성을 포함한 실명"></S.Input>
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
                    {errors.name && <S.ErrorMessage>이름은 한글 2~4글자여야 합니다.</S.ErrorMessage>}
                    <S.InputTitle>생년월일</S.InputTitle>
                    <S.Input type="text" id="userBirth" value={birthdate} onChange={handleBirthChange} placeholder="YYYYMMDD"></S.Input>
                    {errors.birthdate && <S.ErrorMessage>생년월일은 8자리 숫자여야 합니다.</S.ErrorMessage>}
                    <S.Button type="submit" onClick={handleSignup}>회원가입</S.Button>
                    <S.GoLogin>이미 계정이 있으신가요?<Link to="/"><S.Login>로그인</S.Login></Link></S.GoLogin>
                </S.InputField>
            </S.SignupBox>
        </S.SignupLayout>
    );
}
export default Signup;