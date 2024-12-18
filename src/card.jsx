import React from "react";

const Card = ({ isDarkMode, time, subtitle, children }) => {
    const cardStyle = {
        height: "fit-content",
        marginBottom: "-5vh",
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
        color: "gray",
    }

    const hour = {
        color: "gray",
    }

    const title = {
        position: "relative",
        marginTop: "",
        fontFamily: "Oranienbaum, serif",
    }

    const text = {
        position: "relative",
        marginTop: "5vh",
        fontFamily: "Oranienbaum, serif",
    }

    return (
        <div style={cardStyle} className="col-11 mx-auto">
            <div style={subCard} className="mt-3 mb-5 col-12 mx-auto overflow-hidden">
                <div className="d-flex gap-2">
                    <img style={subProfileStyle} className="mini-photo-post" src="/me.png" />
                    <div className="d-flex flex-column mt-1" style={subInfo}>
                        <h3 className="mt-1">Gefferson Ferney Parra Vargas</h3>
                        <div>
                            <h5 style={at} className="at">@JustAnotherDev</h5>
                            <h5 style={hour} className="hour">{time}</h5>
                        </div>
                    </div>
                </div>
                <div className="d-flex col-11 mx-auto flex-column mt-3">
                    <h1 style={title}>{subtitle}</h1>
                    <div style={text}>{children}</div>
                    <div className="d-flex gap-5 reacts">
                        <h2 style={{ color: "gray" }} className="mb-4"><i class='bx bx-heart'></i> Like</h2>
                        <h2 style={{ color: "gray" }} className="mb-4"><i class='bx bx-comment'></i> Comment</h2>
                        <h2 style={{ color: "gray" }} className="mb-4"><i class='bx bx-share' ></i> Share</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;