import React from "react";
import { useState } from "react";
import './style.css'

const Content = ({ isDarkMode }) => {
    const cardStyle = {
        height: "30vh",
        backgroundColor: "black",
        color: "white",
        fontFamily: "Nothing You Could Do, serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    }

    const subCardStyle = {
        height: "35vh",
        backgroundColor: "#8D0000",
        color: "white",
        fontFamily: "Nothing You Could Do, serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        overflow: "hidden"
    }

    const profileStyle = {
        borderRadius: "200%",
        height: "35vh",
        width: "35vh",
        objectFit: "cover",
        position: "absolute",
        marginTop: "-19vh",
        left: "19%",
        border: `solid 6px ${isDarkMode ? '#212121' : '#ffffff'}`,
    }

    const hashTag = {
        position: "relative",
        top: "2rem",
        marginLeft: "40%",
        fontSize: "10vh",
    }

    const personalInfo = {
        marginTop: "20rem",
        fontFamily: "Oranienbaum, serif",
        fontSize: "10vh",
    }

    return (
        <div className="col-11 mx-auto">
            <div className="mt-4 black-card" style={cardStyle}>
                <h1 style={hashTag}>#LaravelRULES</h1>
            </div>
            <img style={profileStyle} className="mini-profile-pic" src="/me.png" />
            <div style={subCardStyle} className="red-card d-flex gap-5">
                <div style={personalInfo} className="col-8 col-lg-5 align-items-start personal">
                    <h1 style={{ fontWeight: "lighter" }} className="text-center col-12">Gefferson Ferney Parra Vargas</h1>
                    <h6 className="text-center">Full-Stack Web Developer</h6>
                    <div className="d-flex justify-content-center gap-3">
                        <h1 className="text-center"><i class='bx bxl-github' style={{ color: '#ffffff' }}></i></h1>
                        <h1 className="text-center"><i class='bx bxl-linkedin' style={{ color: '#ffffff' }} ></i></h1>
                    </div>
                </div>
                <div  className="col-6 justify-content-end d-flex ilove">
                    <h1 className="col-4 text-center" style={{ fontWeight: "lighter" }}>I <i class="fas fa-heart" style={{ fontSize: "35px" }}></i> Programming!</h1>
                </div>
            </div>
        </div>
    )
}

export default Content;