import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import OnlineMagazine from "~/Pages/onlineMagazine/OnlineMagazine";
import NoPage from "~/Pages/noPage/noPage";
import {Provider} from "react-redux";
import {store} from "~/app/store/store";

export default function App() {
    return (
        <Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path="/" element={<OnlineMagazine />} />
                <Route path="/*" element={<NoPage />} />
            </Routes>
        </HashRouter>
        </Provider>
    );
}