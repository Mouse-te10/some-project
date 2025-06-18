import React from "react";

function footer() {
    return (
        <footer className="container" id="footer-link">
        <span className="blur"></span>
        <span className="blur"></span>
        <div className="column">
            <h4 className="logo">
                Благодарности
            </h4>
            <p>
                Я очень рад что ты долистал до сюда дружище!
            </p>
            
        </div>
        <div className="column">
            <h4>Обо мне</h4>
            <a href="https://t.me/Readkon">Telegram channel</a>
            <a href="#">TikTok channel</a>
        </div>
        <div className="column">
            <h4>Написать</h4>
            <a href="https://t.me/Readkon">Telegram</a>
            <a href="https://m.vk.com/selekekbr">VK</a>
            <a href="mailto:bogdanmatmusave@gmail.com">Gmail</a>
        </div>
    </footer>
    )
}

export default footer