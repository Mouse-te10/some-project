import React from "react";

function footer() {
    return (
        <footer className="container">
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
            <a href="#">Telegram channel</a>
            <a href="#">TikTok channel</a>
            <a href="#">Friends</a>
        </div>
        <div className="column">
            <h4>Написать</h4>
            <a href="#">Telegram</a>
            <a href="#">VK</a>
        </div>
    </footer>
    )
}

export default footer