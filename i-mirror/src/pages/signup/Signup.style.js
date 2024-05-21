import styled from "styled-components";
import bg from "../../asset/img/Back.png";

export const SignupLayout = styled.div`
    @font-face {
        font-family: 'Pretendard';
        src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css") format('woff');
        font-weight: normal;
        font-style: normal;
    }
    display: flex;
    width:100vw;
    height:100vh;
    background-image: url(${bg});
    background-size: cover;
    align-items: center;
    justify-content: center;
    font-family:'Pretendard';
`;

export const SignupBox = styled.div`
    width: 25vw;
    height: 60vh;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius:20px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Logo = styled.img`
    width: 15vw;
`

export const InputField = styled.form`
    width:100%;
    height:35vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const InputTitle = styled.div`
    margin-right: 15vw;
    font-weight:600;
`;

export const InputTitles = styled.div`
    margin-right: 7vw;
    font-weight:600;
    margin-left: 1vw;
`;

export const Input = styled.input`
    width: 80%;
    height: 3vh;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid rgba(56,60,103,0.15);
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px; 
    outline:none;
`;

export const Button = styled.button`
    width: 85%;
    height: 5vh;
    padding: 10px;
    background-color: #383C67;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight:1000;
    font-size:1vw;
    margin-top: 1vw;

    &:hover {
        background-color: #6062AA;
    }
`;

export const GoLogin = styled.div`
    margin-left: 10vw;
`;

export const Login = styled.span`
    color: #383C67;
    cursor: pointer;

    &:hover {
        color: blue;
    }
`

export const CheckButton = styled.button`
    width: 8vw;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #3C45A8;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Pretendard', sans-serif;
    margin-left: 1vw;

    &:hover {
        background-color: #383C67;
    }
`;

export const Inputs = styled.div`
    display:flex;
    width:85%;
    justify-content: center;
`

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 22vw;
    margin-left: 2vw;
    font-weight: 800;
`;

export const RadioLabel = styled.label`
    margin-right: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
`;

export const RadioInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

export const RadioCustom = styled.span`
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 0.5px solid #383C67;
    border-radius: 50%;
    margin-right: 5px;

    ${RadioInput}:checked + &::after {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        margin: 2px;
        background-color: #383C67;
        border-radius: 50%;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin: 5px 0;
`;