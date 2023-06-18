import React from "react";
import { Routes, Route, Router } from 'react-router-dom';
import { Home } from "./Home";
import SignUp from "./Signup";
import SignInSide from "./Signin";


function App() {
  

  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/signin" element={<SignInSide/>}/>
    </Routes>
  );
}

export default App;
