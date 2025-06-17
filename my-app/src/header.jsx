import React from "react";

function Header() {
    return (
        <header className="container">
        <div className="content">
            <span className="blur"></span>
            <span className="blur"></span>
            <h4>Ваш сайт станет профессиональным</h4>
            <h1>Привет, меня зовут <span>Bogdan</span>, я Web-разработчик</h1>
            <p>
                Молодой и амбициозный Frontend-разработчик с фокусом 
                на создание современных веб-приложений на базе React. 
                Быстро учусь, проявляю инициативу в решении сложных 
                технических задач и стремлюсь к постоянному профессиональному росту.
            </p>
            <button className="btn">Начать </button>
        </div>
        <div className="image">
            
        </div>
    </header>
    )
}
export default Header