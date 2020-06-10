import React from "react";
// import { Link } from "react-router-dom";
import Facebook from '../components/Facebook';
import LoginForm from '../components/LoginForm';
import Loading from '../components/Loading';

const LoginPage = () => {

    return (
        <div className="app">
            <div className="container">
                <LoginForm/>
                <Facebook/>
                <Loading/>
            </div>
        </div>
    );

    // async componentDidMount(){
  //     try{
  //       let res = await fetch('/isLoggedIn', {
  //         method: 'post',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         }
  //       });
  
  //       let result = await res.json();
  
  //       if(result && result.success){
  //         UserStore.loading = false;
  //         UserStore.isLoggedIn = true;
  //         UserStore.username = result.username;
  //       }
  //       else{
  //         UserStore.loading = false;
  //         UserStore.isLoggedIn = false;
  //       }
  //     }
  //     catch(e){
  //         UserStore.loading = false;
  //         UserStore.isLoggedIn = false;
  //     }
  //   }
    
  //   async doLogout(){
  //     try{
  
  //       let res = await fetch('/logout', {
  //         method: 'post',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         }
  //       });
  
  //       let result = await res.json();
  
  //       if(result && result.success){
  //         UserStore.isLoggedIn = false;
  //         UserStore.username = '';
  //       }
  //     }
  //     catch(e){
  //         console.log(e);
  //     }
  //   }
}

export default LoginPage;