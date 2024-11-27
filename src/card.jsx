import React from "react";

const Card = ({ isDarkMode, time, subtitle, children }) => {
    const cardStyle = {
        backgroundColor: `${isDarkMode ? '#212121' : '#ffffff'}`,
        height: "auto",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Oranienbaum, serif",
    }

    const subProfileStyle = {
        borderRadius: "200%",
        height: "12vh",
        width: "12vh",
        objectFit: "cover",
        border: `solid 1vh ${isDarkMode ? '#212121' : '#ffffff'}`,
        marginLeft: "2rem"
    }

    const subCard = {
        backgroundColor: `${isDarkMode ? '#212121' : '#ffffff'}`,
        border: `solid 3px ${isDarkMode ? '#2F2F2F' : 'gray'}`,
        borderRadius: "2rem"
    }

    const subInfo = {
        fontFamily: "Oranienbaum, serif",
    }

    const at = {
        position: "relative",
        top: "-1.5vh",
        color: "gray"
    }

    const hour = {
        position: "relative",
        top: "-2.6vh",
        color: "gray"
    }

    const title = {
        position: "relative",
        fontFamily: "Oranienbaum, serif",
        top: "-3vh"
    }

    const text = {
        fontFamily: "Oranienbaum, serif",
    }

    return (
        <div style={cardStyle} className="col-11 mx-auto">
            <div style={subCard} className="mt-3 mb-5 col-10 mx-auto overflow-hidden">
                <div className="d-flex gap-2">
                    <img style={subProfileStyle} src="/me.png" />
                    <div className="d-flex flex-column mt-1" style={subInfo}>
                        <h3>Gefferson Ferney Parra Vargas</h3>
                        <h5 style={at}>@JustAnotherDev</h5>
                        <h5 style={hour}>{time}</h5>
                    </div>
                </div>
                <div className="d-flex col-11 mx-auto flex-column">
                    <h1 style={title}>{subtitle}</h1>
                    <div style={text}>{children}</div>
                    <div className="d-flex gap-5">
                        <h2 style={{color:"gray"}} className="mb-4"><i class='bx bx-heart'></i> Like</h2>
                        <h2 style={{color:"gray"}} className="mb-4"><i class='bx bx-comment'></i> Comment</h2>
                        <h2 style={{color:"gray"}} className="mb-4"><i class='bx bx-share' ></i> Share</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;