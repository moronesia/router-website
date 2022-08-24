
import Contact from "./Contact/contact";
import Friends from "./Friends/friends";
import Others from "./Others/others";
import Skills from "./Skills/skills";
import Header from "./Header/header";
import Menu from "./Navigation/menu";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const Index = () => {
  return (
    <div>
        
       <Router>
        <Menu />
            <Routes>
                <Route exact path="/" element={<Header/>}/>
                <Route exact path="/skills" element={<Skills/>}/>
                <Route exact path="/others" element={<Others/>}/>
                <Route exact path="/friends" element={<Friends/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
       </Router>

    </div>
  )
};

export default Index;
