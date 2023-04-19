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


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
