import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Container, Row, Col} from 'react-bootstrap';
import Facebook from '../components/Facebook';
import LoginForm from '../components/LoginForm';
import FacebookStore from '../stores/FacebookStore';

var facebookData;

function getData(){
    let data = sessionStorage.getItem('FacebookData');
    data = JSON.parse(data);
    facebookData = data;
}

const LoginPage = () => {
    return (
        <div className="app">
            <div className="header">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to="/">Main page</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/login">Schedule</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/login">Login</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="container">
                {getData()}
                {facebookData ? '' : <LoginForm/>}
                <Facebook/>
            </div>
        </div>
    );
}

export default LoginPage;
