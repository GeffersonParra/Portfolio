import React from 'react';

const Perskills = ({ isDarkMode }) => {
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

    const icons = {
        fontSize: "5rem",
    }

    return (
        <div>
            <h4 style={Handwritten}>Always needed to achieve good results!</h4>
            <div className="d-flex flex-column flex-lg-row col-12">
                <div className="card col-12 mx-auto" style={cardStyle}>
                    <h1 className="text-start mt-3 col-11 mx-auto">In a personal way...</h1>
                    <div className="flex-wrap d-flex col-11 mx-auto mt-3">
                        <div className="d-flex mx-auto col-12 mb-5">
                            <div className='d-flex flex-column col-8 col-lg-9'>
                                <h2 className="text-start"><b>Time Management</b></h2>
                                <h4>I have the ability to organize and prioritize tasks effectively, ensuring deadlines are met without compromising quality. I am proactive in planning to optimize my productivity.</h4>
                            </div>
                            <div className="text-center d-flex justify-content-center align-items-center col-4 col-lg-3">
                                <i class="bi bi-clock" style={icons}></i>
                            </div>
                        </div>
                        <div className="d-flex mx-auto col-12 mb-5">
                            <div className="text-center d-flex justify-content-center align-items-center col-4 col-lg-3">
                                <i class="bi bi-card-checklist" style={icons}></i>
                            </div>
                            <div className='d-flex flex-column col-8 col-lg-9'>
                                <h2 className="text-end"><b>Adaptability</b></h2>
                                <h4 className='text-end'>I'm always open-mind with new ideas and technologies, I love learning new things and expanding my knowledge, I can get familiar with new tools and methodologies quickly. </h4>
                            </div>
                        </div>
                        <br />
                        <div className="d-flex mx-auto col-12 mb-5">
                            <div className='d-flex flex-column col-8 col-lg-9'>
                                <h2 className="text-start"><b>Critical Thinking</b></h2>
                                <h4>I always analyze the information objectively to take informed decisions. My analytic approach helps me to identify patterns, risks and posibilities.</h4>
                            </div>
                            <div className="text-center d-flex justify-content-center align-items-center col-4 col-lg-3">
                                <i class="bi bi-brilliance" style={icons}></i>
                            </div>
                        </div>
                        <br />
                        <div className="d-flex mx-auto col-12 mb-5">
                            <div className="text-center d-flex justify-content-center align-items-center col-4 col-lg-3">
                                <i class="bi bi-compass" style={icons}></i>
                            </div>
                            <div className='d-flex flex-column col-8 col-lg-9'>
                                <h2 className="text-end"><b>Self-Discipline</b></h2>
                                <h4 className='text-end'>I have a strong sense of self-discipline, which allows me to work autonomously and maintain focus on my goals, even when I have to face with distractions.</h4>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <h1 className="text-start mt-3 col-11 mx-auto">As a group...</h1>
                    <div className="flex-wrap d-flex col-11 mx-auto mt-3">
                        <div className="d-flex mx-auto col-12 mb-5">
                            <div className='d-flex flex-column col-8 col-lg-9'>
                                <h2 className="text-start"><b>Effective Communication</b></h2>
                                <h4>I have the ability to express ideas clearly and assertively both verbally and in writing. I actively listen to others to foster mutual understanding and effective collaboration.</h4>
                            </div>
                            <div className="text-center d-flex justify-content-center align-items-center col-4 col-lg-3">
                                <i class="bi bi-chat-right-text" style={icons}></i>
                            </div>
                        </div>
                        <br />
                        <div className="d-flex mx-auto col-12 mb-5">
                            <div className="text-center d-flex justify-content-center align-items-center col-4 col-lg-3">
                                <i class="bi bi-graph-up-arrow" style={icons}></i>
                            </div>
                            <div className='d-flex flex-column col-8 col-lg-9'>
                                <h2 className="text-end"><b>Team-work</b></h2>
                                <h4 className='text-end'>I enjoy collaborating with different teams in order to achieve common goals. I appreciate the feedback received and I like to support my co-workers to strengthen the collective performance.  </h4>
                            </div>
                        </div>
                        <br />
                        <div className="d-flex mx-auto col-12 mb-5">
                            <div className='d-flex flex-column col-8 col-lg-9'>
                                <h2 className="text-start"><b>Leadership</b></h2>
                                <h4>I have experience leading teams towards success through motivation and strategic decision making. I'm always looking for a positive work environment focused on the results.</h4>
                            </div>
                            <div className="text-center d-flex justify-content-center align-items-center col-4 col-lg-3">
                                <i class="bi bi-bullseye" style={icons}></i>
                            </div>
                        </div>
                        <br />
                        <div className="d-flex mx-auto col-12 mb-5">
                            <div className="text-center d-flex justify-content-center align-items-center col-4 col-lg-3">
                                <i class="bi bi-mortarboard" style={icons}></i>
                            </div>
                            <div className='d-flex flex-column col-8 col-lg-9'>
                                <h2 className="text-end"><b>Teaching and Mentoring Capacity</b></h2>
                                <h4 className='text-end'>I enjoy sharing my knowledge and guiding others in their professional development, supporting my coworkers to acquire new skills.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perskills;