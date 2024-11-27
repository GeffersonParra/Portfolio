import { useState } from 'react';
import React from "react";
import './Bootstrap.css'

const Header = ({ toggleTheme, isDarkMode}) => {
    
    const HeaderStyle = {
        backgroundColor: isDarkMode ? '#080705' : '#ffffff',
        fontFamily: "Oranienbaum, serif",
        height: "10vh",
        position: "fixed",
        zIndex: "100",
    }
    
    const HandwrittenTitle = {
        fontFamily: "Nothing You Could Do, serif",
        position: "relative",
        top: "-1rem"
    }

    return (
        <header style={HeaderStyle} className="d-flex align-items-center col-12">
            <div className="d-flex flex-column col-3 align-items-center h-100">
                <h1 style={{fontWeight:"normal"}} className="mt-2">GeffDev</h1>
                <h6 style={HandwrittenTitle} className="text-center">Just another developer</h6>
            </div>
            <div className="d-flex justify-content-end col-9 align-items-center h-100 gap-5" style={{marginLeft:"-2rem"}}>
                <button className="btn btn-change d-flex flex-column" onClick={toggleTheme}><h4 className="mt-1">{isDarkMode ? "Light Mode" : "Dark Mode"}</h4></button>
                <h1>About Me</h1>
                <h1>Projects</h1>
                <h1>About Me</h1>
                <button className="btn btn-change d-flex flex-column"><h4 className="mt-1">Pricing</h4></button>
            </div>
        </header>
    )
}

export default Header;