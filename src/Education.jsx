import React from "react";

const Education = ({ isDarkMode }) => {
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
        overflow:"hidden",
        marginBottom: "10vh",
        border: `solid 3px ${isDarkMode ? '#454545' : '#212121'}`,
        display: "flex",
        justifyContent: "center",
        fontFamily: "Oranienbaum, serif",
    }

    return (
        <div className="justify-content-center" style={cardStyle}>
            <div className="d-flex flex-column">
                <img src="/ohr.png" alt="" />
            </div>
        </div>
    )
}

export default Education;