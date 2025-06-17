import React from "react"

function Nav() {
    return (
        <nav>
        <div className="nav-logo">
            <a href="#">
                
            </a>
        </div>

        <ul className="nav-links">
            <li className="link"><a href="#">Главная</a></li>
            <li id="link1" className="link"><a href="#">Особенности</a></li>
            <li id="link3" className="link"><a href="#">Контакты</a></li>
        </ul>
        <button className="btn">Связаться со мной</button>
    </nav>
    )
}

export default Nav