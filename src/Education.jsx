import React from "react";

const Education = ({ isDarkMode }) => {
    const Handwritten = {
        fontFamily: "Nothing You Could Do, serif",
        position: "relative",
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
        overflow: "hidden",
        marginBottom: "10vh",
        border: `solid 3px ${isDarkMode ? '#454545' : '#212121'}`,
        display: "flex",
        justifyContent: "center",
        fontFamily: "Oranienbaum, serif",
    }

    return (
        <div className="d-flex flex-column justify-content-center" style={cardStyle}>
            <h1 className="text-center mt-2 mb-2">Formal Education</h1>
            <div className="d-flex">
                <div className="d-flex flex-column col-6">
                    <img src="/ohr.png" className="col-5 mx-auto mb-4" />
                    <h5 className="text-center">High School Degree - Orlando Higuita Rojas School</h5>
                    <p style={Handwritten} className="text-center">2022</p>
                </div>
                <div className="d-flex flex-column col-6">
                    <img src="/sena.png" className="col-5 mx-auto mb-4" />
                    <h5 className="text-center">Technologist In Software's Analysis and Development - SENA</h5>
                    <p style={Handwritten} className="text-center">2025</p>
                </div>
            </div>
            <h1 className="text-center mt-3 mb-4">Informal Education (Courses and Certificates)</h1>
            <div className="d-flex flex-wrap justify-content-center">
                <div className="d-flex flex-column col-6">
                    <img src="/udemy.png" className="col-5 mx-auto mb-4 rounded-4" />
                    <h5 className="text-center">Ethical Hacking And Pentesting - Udemy</h5>
                    <p style={Handwritten} className="text-center">2024</p>
                </div>
                <div className="d-flex flex-column col-6">
                    <img src="/platzi.jpg" className="col-5 mx-auto mb-4 rounded-4" />
                    <h5 className="text-center">Frontend Route (React, Vue) - Platzi</h5>
                    <p style={Handwritten} className="text-center">2024</p>
                </div>
                <div className="d-flex flex-column col-6">
                    <img src="/cisco.png" className="col-5 mx-auto mb-4 rounded-4" />
                    <h5 className="text-center">Ethical Pentester Course - Cisco</h5>
                    <p style={Handwritten} className="text-center">2025</p>
                </div>
                <div className="d-flex flex-column col-6">
                    <img src="/english.jpg" className="col-5 mx-auto mb-4 rounded-4" />
                    <h5 className="text-center">B2 English Certificate - EnglishScore(British Council)</h5>
                    <p style={Handwritten} className="text-center">2023</p>
                </div>
            </div>
        </div>
    )
}

export default Education;