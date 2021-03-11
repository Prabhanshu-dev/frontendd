import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Carousel from './Carousel';
import Product from './Product';
// import Login from './components/accountBox/loginForm';
// import SignUp from "./components/accountBox/signupForm";

import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    // <AppContainer>
    //   <AccountBox />
    // </AppContainer>
    <Router>
      <Route exact path="/"> <Header /> <Carousel /> <Home />  </Route>

      <Route path="/page1"> <Header />  <AccountBox /> </Route>

      {/* <Route path="/page2">   <Header /> <SignUp /> </Route> */}
      <Route path="/page3">   <Header />  </Route>
    </Router>
    // //BEM Conventions
    // <div className="app">

    //   <Header />
    //   <Home />
    //   <Product />
    //   <Carousel />
    // </div>
  );
}

export default App;
