import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "./Agree.style.js";
import { Link } from "react-router-dom";

function Agree() {
    const [allChecked, setAllChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState({
        terms: false,
        privacy: false,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const allIndividualChecked = Object.values(checkedItems).every(Boolean);
        setAllChecked(allIndividualChecked);
    }, [checkedItems]);

    const handleAllChecked = (e) => {
        const isChecked = e.target.checked;
        setAllChecked(isChecked);
        setCheckedItems({
            terms: isChecked,
            privacy: isChecked,
        });
    };

    const handleItemChecked = (e) => {
        const { name, checked } = e.target;
        setCheckedItems((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleNextButtonClick = () => {
        if (allChecked) {
            navigate("/signup");
        }
    };

    return (
        <A.AgreeLayout>
            <A.AgreeBox>
                <A.CheckboxWrapper>
                    <A.CheckboxLabel>
                        <A.CheckInput type="checkbox" checked={allChecked} onChange={handleAllChecked} />
                        <A.Title>전체 동의하기</A.Title>
                    </A.CheckboxLabel>
                    <A.ExContent> 이용약관, 개인정보 수집 및 이용의 동의를 포함합니다.</A.ExContent>
                    <A.CheckboxLabel>
                        <A.CheckInput type="checkbox" name="terms" checked={checkedItems.terms} onChange={handleItemChecked} />
                        <A.Option>[필수]</A.Option> i-mirror 이용약관
                    </A.CheckboxLabel>
                    <A.ContentBox>
                        <A.Content>개인정보보호법에 따라 i - mirror 서비스를 이용해 주셔서 감사합니다.
                            본 약관은 다양한 i - mirror 서비스의 이용과 관련하여 i - mirror 서비스를 제공하는 엠디에이 주식회사와 이를 이용하는 개인정보보호법에 따라 i - mirror 서비스를 이용해 주셔서 감사합니다.
                            본 약관은 다양한 i - mirror 서비스의 이용과 관련하여 i - mirror 서비스를 제공하는 엠디에이 주식회사와 이를 이용하는 개인정보보호법에 따라 i - mirror 서비스를 이용해 주셔서 감사합니다.
                            본 약관은 다양한 i - mirror 서비스의 이용과 관련하여 i - mirror 서비스를 제공하는 엠디에이 주식회사와 이를 이용하는 개인정보보호법에 따라 i - mirror 서비스를 이용해 주셔서 감사합니다.
                        </A.Content>
                    </A.ContentBox>
                    <A.CheckboxLabel>
                        <A.CheckInput type="checkbox" name="privacy" checked={checkedItems.privacy} onChange={handleItemChecked} />
                        <A.Option>[필수]</A.Option>개인정보 수집 및 이용
                    </A.CheckboxLabel>
                    <A.ContentBox>
                        <A.Content>개인정보보호법에 따라 i - mirror 서비스를 이용해 주셔서 감사합니다.
                            본 약관은 다양한 i - mirror 서비스의 이용과 관련하여 i - mirror 서비스를 제공하는 엠디에이 주식회사와 이를 이용하는 개인정보보호법에 따라 i - mirror 서비스를 이용해 주셔서 감사합니다.
                            본 약관은 다양한 i - mirror 서비스의 이용과 관련하여 i - mirror 서비스를 제공하는 엠디에이 주식회사와 이를 이용하는 개인정보보호법에 따라 i - mirror 서비스를 이용해 주셔서 감사합니다.
                            본 약관은 다양한 i - mirror 서비스의 이용과 관련하여 i - mirror 서비스를 제공하는 엠디에이 주식회사와 이를 이용하는 개인정보보호법에 따라 i - mirror 서비스를 이용해 주셔서 감사합니다.
                        </A.Content>
                    </A.ContentBox>
                </A.CheckboxWrapper>
                <A.Button type="button" disabled={!allChecked} onClick={handleNextButtonClick}>
                    다음
                </A.Button>
                <A.GoLogin>이미 계정이 있으신가요?<Link to="/"><A.Login>로그인</A.Login></Link></A.GoLogin>
            </A.AgreeBox>
        </A.AgreeLayout>
    )
}
export default Agree;