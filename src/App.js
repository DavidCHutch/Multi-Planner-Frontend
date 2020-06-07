import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import UserStore from './stores/UserStore';
import LoginForm from './components/LoginForm';
import SubmitButton from './components/SubmitButton';

// import { 
//   BrowserRouter as Router, 
//   Route, 
//   Switch, 
//   Link, 
//   Redirect 
// } from "react-router-dom";

// //Pages
// import MainPage from "./pages";
// import NotFoundPage from "./pages/404";
// import UsersPage from "./pages/users";
// import LoginPage from "./pages/login";

class App extends Component{
  
  async componentDidMount(){
    try{
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if(result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch(e){
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
    }
  }
  
  async doLogout(){
    try{

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if(result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }
    catch(e){
        console.log(e);
    }
  }

  render() {
    if(UserStore.loading){
      return (
        <div className="app">
          <div className='container'>
            Loading, please wait...
          </div>
        </div>
      );
    }
    else{
      if(UserStore.isLoggedIn){
        return (
          <div className="app">
            <div className='container'>
              Welcome {UserStore.username}
              <SubmitButton 
                text={'Log out'}
                disabled={false}
                onClick={ () => this.doLogout() }
              />
            </div>
          </div>
        );
      }
      return (
        <div className="app">
          <div className='container'>
            <LoginForm />
          </div>
        </div>
      );
    //   return <Router>
    //   <Switch> 
    //     <Route exact path="/" component={MainPage}/>
    //     <Route exact path="/login" component={LoginPage}/>
    //     <Route exact path="/404" component={NotFoundPage}/>
    //     <Route exact path="/users" component={UsersPage}/>
    //     <Redirect to="/404"/>
    //   </Switch>
    // </Router>;
    }
  }
}

export default observer (App);
