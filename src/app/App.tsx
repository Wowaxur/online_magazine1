import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import OnlineMagazine from "~/Pages/onlineMagazine/OnlineMagazine";
import NoPage from "~/Pages/noPage/noPage";
import CategoryPage from "~/Features/mainContent/CategoryPage/CategoryPage";
import { Provider } from "react-redux";
import { store } from "~/app/store/store";
import ProtectedRoute from "~/Features/ProtectedRoute/ProtectedRoute";
import LoginPage from "~/Pages/LoginPage/LoginPage";


export default function App() {
    return (
            <Provider store={store}>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route
                            path="/News"
                            element={
                                <ProtectedRoute>
                                    <OnlineMagazine />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/category/:categoryName"
                            element={
                                <ProtectedRoute>
                                    <CategoryPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/*" element={<NoPage />} />
                    </Routes>
                </HashRouter>
            </Provider>
    );
}