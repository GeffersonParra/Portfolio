import React from "react";
import { useState } from "react";
import './style.css'

const Content = ({ isDarkMode }) => {
    const containerStyle = {
        position: "relative",
    };

    const cardStyle = {
        height: "30vh",
        backgroundColor: "black",
        color: "white",
        fontFamily: "Nothing You Could Do, serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    };

    const subCardStyle = {
        height: "35vh",
        backgroundColor: "#8D0000",
        color: "white",
        fontFamily: "Nothing You Could Do, serif",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        overflow: "hidden",
        padding: "1rem",
    };

    const profileStyle = {
        borderRadius: "50%",
        height: "25vh",
        width: "25vh",
        objectFit: "cover",
        position: "absolute",
        top: "30%",
        left: "19%",
        border: `solid 6px ${isDarkMode ? "#212121" : "#ffffff"}`,
        zIndex: 1,
    };

    const personalInfo = {
        fontFamily: "Oranienbaum, serif",
        fontSize: "3vw",
    };

    return (
        <div className="col-11 mx-auto" style={containerStyle}>
            <div className="mt-4 black-card" style={cardStyle}>
                <h1>#LaravelRULES</h1>
            </div>
            <img style={profileStyle} className="mini-profile-pic" src="/me.png" />
            <div style={subCardStyle} className="red-card d-flex flex-wrap">
                <div style={personalInfo} className="col-12 col-lg-6 personal">
                    <h1 className="text-center">Gefferson Ferney Parra Vargas</h1>
                    <h6 className="text-center">Full-Stack Web Developer</h6>
                    <div className="d-flex justify-content-center gap-3">
                        <h1>
                            <i className="bx bxl-github" style={{ color: "#ffffff" }}></i>
                        </h1>
                        <h1>
                            <i className="bx bxl-linkedin" style={{ color: "#ffffff" }}></i>
                        </h1>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center ilove">
                    <h1 className="text-center">
                        I <i className="fas fa-heart" style={{ fontSize: "35px" }}></i> Programming!
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Content;