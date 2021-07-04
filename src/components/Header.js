import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                
                <h1 contentEditable="true">I describe myself as a</h1>
                <hr/>
                <Typed
                    className="typed-text"
                    strings={["Graphic Designer", "Front-End Developer","ML-AI Enthusiast"]}
                    typeSpeed={45}
                    backSpeed={60}
                    loop
                />
                
                <Link to='/Contact' className="btn-main-offer">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
