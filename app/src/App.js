import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import GroupList from "./components/GroupList";
import Contact from "./components/Contact";
import About from "./components/About";
import EditGroup from "./components/EditGroup";


const App = () => {
  return (
      <Router>
          <AppNavbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/groups" element={<GroupList/>} />
              <Route path="/groups/:id" element={<EditGroup/>} />
          </Routes>
      </Router>
  );
}

export default App;
