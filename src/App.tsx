import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import OnlineMagazine from "./components/Pages/onlineMagazine/OnlineMagazine";
import Layout from "./components/Pages/layout/layour";
import NoPage from "./components/Pages/noPage/noPage";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="Magazine" element={<OnlineMagazine />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </HashRouter>
    );
}