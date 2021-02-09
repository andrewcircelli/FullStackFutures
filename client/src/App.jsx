import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import UserProfile from "./pages/UserProfile";
import "./App.css";
// import useState from "react";
// import Store into this component

class App extends React.Component {
  state = {
    notsignedIn: false,
    user:""
  }
 
  setLoginStatus = (userDetails) => {
  
    this.setState({
      notsignedIn:true,
      user: userDetails
    })
  }
  render(){
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"}>
            {this.state.notsignedIn === false ?
            <>
            <HeroSection />
            <SignIn
            setLoginStatus = {this.setLoginStatus} />
            <SignUp />
            </>
            : <UserProfile username={this.state.user} />}
          </Route>
          <Route exact path={"/profiles/:profileType"}>
          <Route exact path={"/dashboard/:user"} component={UserProfile} />
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
            }
}

export default App;
