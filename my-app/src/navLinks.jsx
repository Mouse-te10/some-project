import React from "react"

function Nav() {
    return (
        <nav>
        <div className="nav-logo">
            <a href="#">
                
            </a>
        </div>

        <ul className="nav-links">
            <li className="link"><a href="#">Home</a></li>
            <li id="link1" className="link"><a href="#">Features</a></li>
            <li id="link2" className="link"><a href="#">Pricing</a></li>
            <li id="link3" className="link"><a href="#">About</a></li>
        </ul>
        <button className="btn">Hire Me</button>
    </nav>
    )
}

export default Nav