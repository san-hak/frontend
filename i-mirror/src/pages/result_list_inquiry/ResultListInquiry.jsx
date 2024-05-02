import React from "react";
import * as T from "./resultListInquiryStyle";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";

function ResultListInquiry() {
  return (
    <>
      <div>
        <img src={iMirrorLogo} alt="logo" />
        <div>
          <div>검색어를 입력해주세요</div>
          <img src="" alt="검색" />
        </div>
      </div>
    </>
  );
}

export default ResultListInquiry;
