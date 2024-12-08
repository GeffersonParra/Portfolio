import React from "react";
import { useState } from "react";
import Header from "./header";
import Content from "./content";
import Card from "./card";
import AboutMe from "./aboutme";
import "./style.css"
import Technologies from "./Technologies";
import Perskills from "./perskills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

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
            <Card isDarkMode={isDarkMode} time={"Yesterday at 15:01"} subtitle={"My education"}>
                <Education isDarkMode={isDarkMode}/>
            </Card>
            <Card isDarkMode={isDarkMode} time={"Yesterday at 14:23"} subtitle={"My soft-skills"}>
                <Perskills isDarkMode={isDarkMode}/>
            </Card>
            <Card isDarkMode={isDarkMode} time={"Yesterday at 14:02"} subtitle={"Featured projects"}>
                <Projects isDarkMode={isDarkMode}/>
            </Card>
            <Card isDarkMode={isDarkMode} time={"Yesterday at 13:42"} subtitle={"Contact"}>
                <Contact isDarkMode={isDarkMode}/>
            </Card>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Layout;