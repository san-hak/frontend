import styled from "styled-components";
import bg from "../../../asset/img/Back.png";

export const AgreeLayout = styled.div`
    @font-face {
        font-family: 'Pretendard';
        src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
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
`

export const AgreeBox = styled.div`
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

export const CheckboxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    height: 75%;
    justify-content: space-evenly;
`;

export const CheckboxLabel = styled.label`
    display:flex;
    flex-direction: row;
    align-items: center;
    font-weight:600;
    font-size: 1vw;
`;

export const CheckInput = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #383C67;
    border-radius: 100%;
    background-color: #fff;
    cursor: pointer;
    position: relative;
    margin-right: 10px;
    outline:none;
    
    &:checked {
        background-color: #383C67;
        border-color: #383C67;
    }
    
    &:checked::after {
        content: '✓';
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 14px;
    }
`

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
    margin-top: -3vw;

    &:disabled {
        background-color: #C4C4C4;
    }

    &:hover:enabled {
        background-color: #6062AA;
    }
`;

export const GoLogin = styled.div`
    margin-left: 10vw;
    margin-top: -3vw;
`;

export const Login = styled.span`
    color: #383C67;
    cursor: pointer;

    &:hover {
        color: blue;
    }
`

export const Option = styled.span`
    color: #3C45A8;
    font-size: 0.8vw;
    margin-right: 5px;
`

export const Content = styled.div`
    color: #929292;
    font-size: 0.8vw;
`

export const ExContent = styled.div`
    color: #929292;
    font-size: 0.8vw;
    margin-top: -2vw;
`

export const ContentBox = styled.div`
    width:100%;
    height:5vw;
    overflow:auto;
    box-sizing: border-box;
    background-color: rgba(255,255,255,0.8);
    border-radius:5px;
    border: 1px solid rgba(56,60,103,0.15);
    margin-top: -2vw;
`

export const Title = styled.span`
    font-size: 1.1vw;
`