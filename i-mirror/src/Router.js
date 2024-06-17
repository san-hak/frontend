import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultListInquiry from "./pages/result_list_inquiry/ResultListInquiry";
import AnalysisResult from "./pages/analysis_result/AnalysisResult";
import UserAnalysisResult from "./pages/analysis_result/UserAnalysisResult";
import UserResultListInquiry from "./pages/result_list_inquiry/UserResultListInquiry";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/admin" element={<ResultListInquiry />} />
        <Route
          path="/analysis-result/:koreanName/:birthDate"
          element={<AnalysisResult />}
        />
        <Route path="/user" element={<UserResultListInquiry />} />
        <Route
          path="/analysis-result/:koreanName/:birthDate/:testDate"
          element={<UserAnalysisResult />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
