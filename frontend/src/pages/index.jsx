import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {

    return (
        <div className="app">
            <div className="container">
                <h3>Welcome to the Multi-planner application</h3>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default MainPage;