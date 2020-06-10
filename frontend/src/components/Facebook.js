import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';

export default class LoginFacebook extends Component{

    state = {
        auth: false,
        name: '',
        picture: ''
    }

    componentClicked = () => {
        console.log('Facebook btn clicked');

        // PROCESS DATA, SAVE TO DATABASE ETC.
    }

    responseFacebook = (response) => {
        console.log(response);
        if(response.status !== 'unknown'){
            this.setState({
                auth: true,
                userID: response.userID,
                accessToken: response.accessToken,
                expiresIn: response.expiresIn,
                name: response.name,
                picture: response.picture.data.url
            });
        }
    }

    render(){
        let facebookData;

        this.state.auth ? 
            facebookData = (
                <div>
                    <h2>Weclome {this.state.name}</h2>
                    <img src={this.state.picture} alt={this.state.name} className="profilePic"/>
                </div>
                
            ) :
            facebookData = (
                <FacebookLoginBtn
                    appId="3269841343029131"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );

        return(
            <>
                {facebookData}
            </>
        );
    }

}