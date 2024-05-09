import React from "react";
import * as S from "./Signup.style.js";
import bg from "../../asset/img/Back.png";

function Signup() {
    return (
        <S.SignupLayout>
            <S.Bg src={bg}></S.Bg>
        </S.SignupLayout>
    );
}
export default Signup;