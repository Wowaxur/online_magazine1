import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import OnlineMagazine from "./components/Pages/onlineMagazine/OnlineMagazine";
import Layout from "./components/Pages/layout/layour";
import NoPage from "./components/Pages/noPage/noPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}/>
                <Route path="Magazine" element={<OnlineMagazine />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>

    );
}


//router 