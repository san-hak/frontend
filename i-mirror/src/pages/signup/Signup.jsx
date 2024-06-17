import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Signup.style.js";
import { Link } from "react-router-dom";
import logo from "../../asset/img/Logo.svg";
import signup from "../../hooks/auth/signup.js";

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
        setErrors((prev) => ({ ...prev, birthdate: !validateBirth(formattedValue) }));
    };

    const formatBirth = (value) => {
        if (/^\d*$/.test(value)) {
            if (value.length === 8) {
                return value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
            }
            return value;
        }
        return birthdate;
    };

    const validateBirth = (value) => {
        const birthRegex = /^\d{4}-\d{2}-\d{2}$/;
        return birthRegex.test(value);
    };

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
                const response = await signup(signupData);
                if (response.status === 201 || response.status === 200) {
                    console.log("회원가입 성공:", response.data);
                    alert("회원가입에 성공했습니다.");
                    navigate("/");
                } else {
                    alert(response.data.message);
                    console.log("오류가 발생: ", response.status, response.data);
                }
            } catch (error) {
                console.error("회원가입 요청 중 오류 발생:", error);
                alert(error.response.data.message);
            }
        } else {
            alert("모든 입력 값을 확인해주세요.");
        }
    };

    return (
        <S.SignupLayout>
            <S.SignupBox>
                <S.Logo src={logo} alt="Logo" />
                <S.InputField>
                    <S.Inputs>
                        <S.InputTitles>이름</S.InputTitles>
                        <S.InputTitles>성별</S.InputTitles>
                    </S.Inputs>
                    <S.Inputs>
                        <S.Input
                            type="text"
                            id="userName"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="성을 포함한 실명"
                        />
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
                    <S.Input
                        type="text"
                        id="userBirth"
                        value={birthdate}
                        onChange={handleBirthChange}
                        placeholder="YYYYMMDD"
                    />
                    {errors.birthdate && <S.ErrorMessage>생년월일은 YYYY-MM-DD 형식이어야 합니다.</S.ErrorMessage>}
                    <S.Button type="button" onClick={handleSignup}>회원가입</S.Button>
                    <S.GoLogin>
                        이미 계정이 있으신가요? <Link to="/"><S.Login>로그인</S.Login></Link>
                    </S.GoLogin>
                </S.InputField>
            </S.SignupBox>
        </S.SignupLayout>
    );
}

export default Signup;