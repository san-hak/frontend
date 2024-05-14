import React from "react";
import { useParams } from "react-router-dom";
import * as A from "./AnalysisResult.Style";
import { patientList } from "../../constant/patientList";

function AnalysisResult() {
  const { englishName } = useParams();
  const patient = patientList.find(
    (patient) => patient.englishName === englishName
  );

  return (
    <A.AnalysisResultLayout>
      <A.AnalysisResultPaper>
        <>{patient.englishName}</>
        <>{patient.koreanName}</>
      </A.AnalysisResultPaper>
    </A.AnalysisResultLayout>
  );
}

export default AnalysisResult;
