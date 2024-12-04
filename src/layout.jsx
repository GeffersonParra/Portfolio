import React from "react";
import { useState } from "react";
import Header from "./header";
import Content from "./content";
import Card from "./card";
import AboutMe from "./aboutme";
import "./style.css"

const Layout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode)
    }

    return (
        <div className={`${isDarkMode ? "dark-mode" : "light-mode"} col-12 d-flex flex-column`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Content isDarkMode={isDarkMode} />
            <Card isDarkMode={isDarkMode} time={"Yesterday at 16:01"} subtitle={"About Me"}>
                <AboutMe/>
            </Card>
            <br />
        </div>
    )
}

export default Layout;