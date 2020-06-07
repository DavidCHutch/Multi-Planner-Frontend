import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {

    return (
        <div>
            <h3>Welcome to the React Router Tutorial</h3>
            <small>Main page</small>
            <Link to="/users">Shows Users</Link>
            <div>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

export default MainPage;