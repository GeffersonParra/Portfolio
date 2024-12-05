import React from "react";
import { useState } from "react";
import Header from "./header";
import Content from "./content";
import Card from "./card";
import AboutMe from "./aboutme";
import "./style.css"
import Technologies from "./Technologies";

const Layout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode)
    }

    return (
        <div className={`${isDarkMode ? "dark-mode" : "light-mode"} col-12 d-flex flex-column`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Content isDarkMode={isDarkMode} />
            <Card isDarkMode={isDarkMode} time={"Yesterday at 16:01"} subtitle={"About me"}>
                <AboutMe/>
            </Card>
            <Card isDarkMode={isDarkMode} time={"Yesterday at 15:32"} subtitle={"Technologies I use"}>
                <Technologies isDarkMode={isDarkMode}/>
            </Card>
            <Card isDarkMode={isDarkMode} time={"Yesterday at 14:32"} subtitle={"My soft-skills"}>
            </Card>
            <Card isDarkMode={isDarkMode} time={"Yesterday at 14:00"} subtitle={"Some of my skills"}>
            </Card>
            <Card isDarkMode={isDarkMode} time={"Yesterday at 12:02"} subtitle={"Featured projects"}>
            </Card>
            <Card isDarkMode={isDarkMode} time={"Yesterday at 11:42"} subtitle={"Contact"}>
            </Card>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Layout;