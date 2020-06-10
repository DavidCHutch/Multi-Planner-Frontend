import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
// import Facebook from './components/Facebook';
// import LoginForm from './components/LoginForm';
// import Loading from './components/Loading';
// import UserStore from './stores/UserStore';
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
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/login";

class App extends Component {
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
  
  // render(){
  //   return (
  //     <div className="app">
  //       <div className="container">
  //         <LoginForm/>
  //         <Facebook/>
  //         <Loading/>
  //       </div>
  //     </div>
  //   );
  // }
}

// class App extends Component{
  // render() {
  //   if(UserStore.loading){
  //     return (
  //       <div className="app">
  //         <div className='container'>
  //           Loading, please wait...
  //         </div>
  //       </div>
  //     );
  //   }
  //   else{
  //     if(UserStore.isLoggedIn){
  //       return (
  //         <div className="app">
  //           <div className='container'>
  //             Welcome {UserStore.username}
  //             <SubmitButton 
  //               text={'Log out'}
  //               disabled={false}
  //               onClick={ () => this.doLogout() }
  //             />
  //           </div>
  //         </div>
  //       );
  //     }
  //     return (
  //       <div className="app">
  //         <div className='container'>
  //           <LoginForm />
  //         </div>
  //       </div>
  //     );
    //   return <Router>
    //   <Switch> 
    //     <Route exact path="/" component={MainPage}/>
    //     <Route exact path="/login" component={LoginPage}/>
    //     <Route exact path="/404" component={NotFoundPage}/>
    //     <Route exact path="/users" component={UsersPage}/>
    //     <Redirect to="/404"/>
    //   </Switch>
    // </Router>;
  //   }
  // }
// }

export default observer (App);
