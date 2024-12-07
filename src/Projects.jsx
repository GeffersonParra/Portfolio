import React from "react";

const Projects = ({ isDarkMode }) => {
    const Handwritten = {
        fontFamily: "Nothing You Could Do, serif",
        position: "relative",
        top: "-3vh"
    }

    const MiniHandWritten = {
        fontFamily: "Nothing You Could Do, serif",
        position: "relative",
        top: "-1vh",
        fontSize: "larger"
    }

    const cardStyle = {
        color: `${isDarkMode ? "white" : "black"}`,
        backgroundColor: `${isDarkMode ? '#454545' : '#ffffff'}`,
        height: "fit-content",
        marginBottom: "10vh",
        border: `solid 3px ${isDarkMode ? '#454545' : '#212121'}`,
        display: "flex",
        justifyContent: "center",
        fontFamily: "Oranienbaum, serif",
    }

    return (
        <div>
            <h4 style={Handwritten}>This is what you've been waiting for, I know, I know...</h4>
            <div className="card col-12 mx-auto" style={cardStyle}>
                <h3 className="text-center">Back-end</h3>
            </div>
        </div>
    )
}

export default Projects;