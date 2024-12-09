import { height } from "@fortawesome/free-solid-svg-icons/fa0";
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
        border: `solid 3px ${isDarkMode ? '#454545' : '#212121'}`,
        display: "flex",
        justifyContent: "center",
        fontFamily: "Oranienbaum, serif",
    }

    const indStyle = {
        backgroundColor: `${isDarkMode ? "white" : "black"}`
    }

    const imgStyle = {
        width: "100%",
        objectFit: "contain",
    }

    const hrStyle = {
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "white" : "black",
        height: "3px",   
        border: "none",     
        width: "80%",   
        fontWeight: "bold",
    };

    const aStyle = {
        textDecoration: "none",
        color: isDarkMode? "white" : "black",
        fontSize: "larger",
        fontFamily: "Nothing You Could Do, serif",
    }

    return (
        <div className="d-flex flex-column">
            <h4 style={Handwritten}>This is what you've been waiting for, I know, I know...</h4>
            <div className="card col-12 mx-auto mb-3" style={cardStyle}>
                <h2 className="text-center mx-auto mt-3">EDL Project</h2>
                <h5 className="text-center col-10 mx-auto">This project was made using Laravel, MySQL, Bootstrap and CSS, and it allows the management of projects, personal and reports in PDF format.</h5>
                <div id="carouselExampleCaptions" class="carousel slide col-12 col-lg-8 mx-auto">
                    <div class="carousel-indicators">
                        <button type="button" style={indStyle} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" style={indStyle} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" style={indStyle} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" style={indStyle} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/projects/edl1.png" class="d-block mx-auto" style={imgStyle} alt="Login View" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Login view</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/projects/edl2.png" class="d-block mx-auto" style={imgStyle} alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Welcome View</h5>
                                <p>(As an employee)</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/projects/edl3.png" class="d-block mx-auto" style={imgStyle} alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Your Data View</h5>
                                <p>(As an employee)</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/projects/edl4.png" class="d-block mx-auto" style={imgStyle} alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Reports View</h5>
                                <p>(As an employee)</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className={`carousel-control-prev-icon ${isDarkMode ? '' : 'dark-carousel-prev' }`} aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class={`carousel-control-next-icon ${isDarkMode ? '' : 'dark-carousel-next' }`} aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <h5 className="text-center mt-3 mb-3">I can't provide the source code of this project, as it's not an open code project.</h5>
            </div>
            <hr className="mx-auto" style={hrStyle}/>
            <div className="card col-12 mx-auto mt-3" style={cardStyle}>
                <h2 className="text-center mx-auto mt-3">Spring Store</h2>
                <h5 className="text-center col-10 mx-auto">This project was made using Springboot, PostgreSQL, and React with Bootstrap, it allows the management of inventories, sellings, clients and categories exposing APIs.</h5>
                <div id="carouselExampleCaptions2" class="carousel slide col-12 col-lg-8 mx-auto">
                    <div class="carousel-indicators">
                        <button type="button" style={indStyle} data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" style={indStyle} data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" style={indStyle} data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" style={indStyle} data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/projects/store1.png" class="d-block mx-auto" style={imgStyle} alt="Login View" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Categories view</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/projects/store2.png" class="d-block mx-auto" style={imgStyle} alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Products View</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/projects/store3.png" class="d-block mx-auto" style={imgStyle} alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Client List View</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/projects/store4.png" class="d-block mx-auto" style={imgStyle} alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Sellings/Orders View</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                        <span className={`carousel-control-prev-icon ${isDarkMode ? '' : 'dark-carousel-prev' }`} aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                        <span class={`carousel-control-next-icon ${isDarkMode ? '' : 'dark-carousel-next' }`} aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <h4 className="text-center mt-3 mb-3">You can check the source code here: <a href="https://github.com/GeffersonParra/SpringBoot_Projects/tree/main/spring_store" style={aStyle} ><i class='bx bxl-github'></i> Github Repository</a></h4>
            </div>
        </div>
    )
}

export default Projects;