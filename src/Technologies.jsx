import React from "react";

const Technologies = ({ isDarkMode }) => {
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
        height: "65vw",
        marginBottom: "5vh",
        border: `solid 3px ${isDarkMode ? '#454545' : '#212121'}`,
        display: "flex",
        justifyContent: "center",
        fontFamily: "Oranienbaum, serif",
    }

    return (
        <div>
            <h4 style={Handwritten}>¡Some of them are simply art! And I can create art with them...</h4>
            <div className="d-flex flex-column flex-lg-row col-12">
                <div className="card col-12 col-lg-3 mx-auto" style={cardStyle}>
                    <h3 className="text-center mt-3">Back-end</h3>
                    <div className="flex-wrap d-flex flex-lg-column">
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/laravel.png" className="mx-auto col-12" style={{ width: "8vw" }} />
                            <h1 className="text-center">Laravel</h1>
                            <p className="text-center" style={MiniHandWritten}>Like this one!</p>
                        </div>
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/django.png" className="mx-auto" style={{ width: "14vw" }} />
                            <h1 className="text-center">Django</h1>
                            <p className="text-center" style={MiniHandWritten}>Or this one!</p>
                        </div>
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/spring.png" className="mx-auto" style={{ width: "9vw" }} />
                            <h1 className="text-center">Spring Boot</h1>
                            <p className="text-center" style={MiniHandWritten}>This one too...</p>
                        </div>
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/dotnet.png" className="mx-auto rounded-circle" style={{ width: "10vw" }} />
                            <h1 className="text-center">.NET</h1>
                            <p className="text-center" style={MiniHandWritten}>I kind of like it.</p>
                        </div>
                    </div>
                </div>
                <div className="card col-12 col-lg-3 mx-auto" style={cardStyle}>
                    <h3 className="text-center mt-3 mt-lg-0">Front-end</h3>
                    <div className="flex-wrap d-flex flex-lg-column">
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/react.png" className="mx-auto" style={{ width: "8vw" }} />
                            <h1 className="text-center">React</h1>
                            <p className="text-center" style={MiniHandWritten}>I love it.</p>
                        </div>
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12 mb-lg-5">
                            <img src="/bootstrap.png" className="mx-auto" style={{ width: "9vw" }} />
                            <h1 className="text-center">Bootstap</h1>
                            <p className="text-center" style={MiniHandWritten}>Beautiful...</p>
                        </div>
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/tailwind.png" className="mx-auto mb-lg-3" style={{ width: "9vw" }} />
                            <h1 className="text-center">Tailwind</h1>
                            <p className="text-center" style={MiniHandWritten}>Not a big fan</p>
                        </div>
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/angular.png" className="mx-auto mb-lg-2" style={{ width: "9vw" }} />
                            <h1 className="text-center">Angular</h1>
                            <p className="text-center" style={MiniHandWritten}>Simply art.</p>
                        </div>
                    </div>
                </div>
                <div className="card col-12 col-lg-3 mx-auto" style={cardStyle}>
                    <h3 className="text-center mt-3">Databases</h3>
                    <div
                        className="flex-wrap d-flex flex-lg-column"
                        style={{
                            justifyContent: "flex-start",
                            height: "100%",
                            alignItems: "center"
                        }}
                    >
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/mysql.png" className="mx-auto" style={{ width: "9vw" }} />
                            <h1 className="text-center">MySQL</h1>
                            <p className="text-center" style={MiniHandWritten}>The most used.</p>
                        </div>
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/postgresql.png" className="mx-auto" style={{ width: "9vw" }} />
                            <h1 className="text-center">PostgreSQL</h1>
                            <p className="text-center" style={MiniHandWritten}>Also a good choice.</p>
                        </div>
                        <div className="d-flex flex-column mx-auto col-6 col-lg-12">
                            <img src="/mongodb.png" className="mx-auto mb-lg-3" style={{ width: "9vw" }} />
                            <h1 className="text-center">MongoDB</h1>
                            <p className="text-center" style={MiniHandWritten}>A good one.</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Technologies;