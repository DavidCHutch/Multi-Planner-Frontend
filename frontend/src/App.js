import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Facebook from './components/Facebook';
// import LoginForm from './components/LoginForm';
// import Loading from './components/Loading';
import UserStore from './stores/UserStore';
import FacebookStore from './stores/FacebookStore';
// import SubmitButton from './components/SubmitButton';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";

//Pages
import MainPage from "./pages";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";
// import LoadingSpinner from './components/Loading';

class App extends Component {
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
  
  render(){
      return (
        <Router>
          <Switch> 
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/error" component={ErrorPage}/>
            <Redirect to="/error"/>
          </Switch>
        </Router>
       );
  }
}

export default App;
