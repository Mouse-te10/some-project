import React from "react";

function footer() {
    return (
        <footer className="container">
        <span className="blur"></span>
        <span className="blur"></span>
        <div className="column">
            <div className="logo">
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="socials">
                <a href="#"><i className="ri-youtube-line"></i></a>
                <a href="#"><i className="ri-instagram-line"></i></a>
                <a href="#"><i className="ri-twitter-line"></i></a>
            </div>
        </div>
        <div className="column">
            <h4>Company</h4>
            <a href="#">Business</a>
            <a href="#">Partnership</a>
            <a href="#">Network</a>
        </div>
        <div className="column">
            <h4>About Us</h4>
            <a href="#">Blogs</a>
            <a href="#">Channels</a>
            <a href="#">Sponsors</a>
        </div>
        <div className="column">
            <h4>Contact</h4>
            <a href="#">Contact Us</a>
            <a href="#">Privicy Policy</a>
            <a href="#">Terms & Conditions</a>
        </div>
    </footer>
    )
}

export default footer