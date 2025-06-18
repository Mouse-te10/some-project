import React from "react"

function Nav() {

    const gitHub = () => {
        window.location.href = 'https://github.com/Mouse-te10'
    }
    return (
    <nav>
        <ul className="nav-links">
            <li className="link"><a href="#header-link">Главная</a></li>
            <li id="link1" className="link"><a href="#section-features">Особенности</a></li>
            <li id="link3" className="link"><a href="#footer-link">Контакты</a></li>
        </ul>
        <button className="btn" onClick={gitHub}>GitHub</button>
    </nav>
    )
}

export default Nav