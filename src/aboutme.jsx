import React from "react";

const AboutMe = () => {
    const Handwritten = {
        fontFamily: "Nothing You Could Do, serif",
        position: "relative",
        top: "-3vh"
    }

    const ImportantText = {
        position: "relative",
        top: "-1rem"
    }

    const miniImg = {
        position:"relative",
        top:"-10vh",
        height:"40rem",
        borderRadius: "100px"
    }

    return (
        <div>
            <h4 style={Handwritten}>I'm sure you're wondering, who's this guy?</h4>
            <div className="d-flex col-12" style={{gap:"5rem"}}>
                <div style={ImportantText} className="col-6">
                    <h2>Let me introduce myself, My name is Gefferson.</h2>
                    <br />
                    <h2>I am a passionate full-stack web developer with experience building modern and scalable web applications. I love learning new technologies, facing creative challenges and, overall, learning from my past mistakes.</h2>
                    <br />
                    <h2>I used to play with some PC components when I was a child, what made me want to learn how do these machines work, outside and inside.</h2>
                    <br />
                    <h4 style={Handwritten}>(And how to fix ‘em, or at least, try to.)</h4>
                </div>
                <img style={miniImg} src="./public/me2.png" />
            </div>
        </div>
    )
}

export default AboutMe;