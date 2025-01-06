import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { loginWithPopup, isAuthenticated,  } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("isAuthenticated:", isAuthenticated);
        if (isAuthenticated) {
            navigate("/News");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to Online Magazine</h1>
            <p>Please log in to access the content.</p>
            <button onClick={() => loginWithPopup()}>Log In</button>
        </div>
    );
};

export default LoginPage;