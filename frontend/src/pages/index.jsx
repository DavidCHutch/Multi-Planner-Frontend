import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Container, Row, Col} from 'react-bootstrap';
import FacebookStore from '../stores/FacebookStore';
var facebookData;

function getData(){
    let data = sessionStorage.getItem('FacebookData');
    data = JSON.parse(data);
    facebookData = data;
}

const MainPage = () => {  
    return (
        <div className="app">
            {getData()}
            <div className="header">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to="/login">User</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/login">Schedule</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/login">Login</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="container">
                <h2>{FacebookStore.userID}</h2>
                <h3>Welcome to the Multi-planner application {facebookData ? facebookData.name : ''}</h3>
                <div className="welcomeView">
                    <p>This application .....</p>
                </div>
            </div>
        </div>
    );
}

export default MainPage;