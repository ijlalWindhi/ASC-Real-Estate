import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landing page";
import DetailProperty from "../../pages/landing page/property/fragments/DetailProperty";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/detail-property/:id" element={<DetailProperty />} />
        </Routes>
    );
}
