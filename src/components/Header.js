import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development and websites</h1>
                <Typed
                    className="typed-text"
                    strings={["Graphic Designer", "Front-End Developer","ML-AI Enthusiast"]}
                    typeSpeed={45}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
