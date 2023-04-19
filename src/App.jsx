import React from "react";
import './styles/globalStyles.scss';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {
  HashLink
} from 'react-router-hash-link';
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
