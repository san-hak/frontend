import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultListInquiry from "./pages/result_list_inquiry/ResultListInquiry";
import AnalysisResult from "./pages/analysis_result/AnalysisResult";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/main" element={<ResultListInquiry />} />
        <Route
          path="/analysis-result/:koreanName/:birthDate"
          element={<AnalysisResult />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
