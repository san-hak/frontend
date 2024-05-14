import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultListInquiry from "./pages/result_list_inquiry/ResultListInquiry";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/main" element={<ResultListInquiry />} />
        <Route path="/main/:englishName" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
