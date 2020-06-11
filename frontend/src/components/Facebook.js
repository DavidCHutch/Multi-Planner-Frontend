import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';
var facebookSessionData;

export default class LoginFacebook extends Component{
    constructor(props){
        super(props);
        this.state = {
            auth: false,
            userID: '',
            accessToken: '',
            expiresIn: 0,
            name: '',
            picture: ''
        }
    }
      
    getData = () => {
        let data = sessionStorage.getItem('FacebookData');
        data = JSON.parse(data);
        facebookSessionData = data;
    }

    componentClicked = () => {
        console.log('Facebook btn clicked');

        // PROCESS DATA, SAVE TO DATABASE ETC.
    }

    responseFacebook = (response) => {
        if(response.status !== 'unknown'){
            this.setState({
                auth: true,
                userID: response.userID,
                accessToken: response.accessToken,
                expiresIn: response.expiresIn,
                name: response.name,
                picture: response.picture.data.url
            });
            sessionStorage.setItem('FacebookData', JSON.stringify(response));
            var elm = document.getElementById('logForm');
            if(elm !== null){
                elm.style.display='none';
            }
        }
    }

    render(){
        let facebookData;
        this.getData()
        if(this.state.auth){
            facebookData = (
                <div>
                    <h2>Weclome {this.state.name}</h2>
                    <img src={this.state.picture} alt={this.state.name} className="profilePic"/>
                </div>
                
            )
        }
        else if(facebookSessionData){
            facebookData = (
                <div>
                    <h2>Weclome {facebookSessionData.name}</h2>
                    <img src={facebookSessionData.picture.data.url} alt={facebookSessionData.name} className="profilePic"/>
                </div>
            )
        }
        else{
            facebookData = (
                <FacebookLoginBtn
                    appId="3269841343029131"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );
        }

        return(
            <>
                {facebookData}
            </>
        );
    }

}