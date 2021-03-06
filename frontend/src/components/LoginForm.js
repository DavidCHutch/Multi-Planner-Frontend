import React, { Component } from 'react';
// import ImputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from '../stores/UserStore';
import InputField from './InputField';

class LoginForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false
    }
  }

  /**
   * Max input length for password and username
   */
  setInputValue(property, val){
    val = val.trim();
    if(val.length > 25){
      return;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm(){
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
    })
  }

  async doLogin(){
    if(!this.state.username){
      return;
    }
    if(!this.state.password){
      return;
    }

    this.setState({
      buttonDisabled: true
    })

    try{
      let res = await fetch('/api/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })

      let result = await res.json();
      if(result && result.success){
        UserStore.isLogged = true;
        UserStore.username = result.username;
      }
      else if(result && result.success === false){
        this.resetForm();
        alert(result.msg);
      }
    }

    catch(e){
      console.log(e);
      this.resetForm();
    }

  }

  render() {
    return (
    <div className="loginForm" id="logForm">
        <div className="logTitle">
          <h2>Log in</h2>
        </div>
        
        <InputField
          type='text'
          placeholder='Username'
          value={this.state.username ? this.state.username : ''}
          onChange={ (val) => this.setInputValue('username', val) }
        />

        <InputField
          type='password'
          placeholder='Password'
          value={this.state.password ? this.state.password : ''}
          onChange={ (val) => this.setInputValue('password', val) }
        />

        <SubmitButton
          text='Login'
          disabled={this.state.buttonDisabled}
          onClick={ () => this.doLogin()}
        />

    </div>
    );
  }
}

export default LoginForm;
