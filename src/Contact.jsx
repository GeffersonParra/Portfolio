import React from "react";

const Contact = ({ isDarkMode }) => {
    const Handwritten = {
        fontFamily: "Nothing You Could Do, serif",
        position: "relative",
        top: "-3vh"
    }

    const MiniHandWritten = {
        fontFamily: "Nothing You Could Do, serif",
        position: "relative",
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

    const icon = {
        fontSize: "7vh",
        textAlign: "center"
    }

    return (
        <div id="contact">
            <h4 style={Handwritten}>Let's keep in touch!</h4>
            <div className="d-flex flex-column justify-content-center" style={cardStyle}>
                <h5 className="text-center mt-2 mb-3">Are you interested in my work? Do you want a specific pricing for your project? You can always contact me at: </h5>
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <i class='bx bxl-gmail' style={icon}></i>
                    <h3>geffdeveloper@gmail.com</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3 gap-3">
                <i class='bx bxl-github' style={icon}></i>
                    <h3>GeffersonParra</h3>
                </div>
                {/* https://www.linkedin.com/in/geff-dev-640992340/ */}
                <div className="d-flex justify-content-center align-items-center mt-3 gap-3 mb-4">
                <i class='bx bxl-linkedin' style={icon}></i>
                    <h3>Gefferson Parra</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact;