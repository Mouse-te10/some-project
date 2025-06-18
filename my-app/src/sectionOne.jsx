import React from "react";

function sectionOne() {
    return (
        <section className="container" id="section-features">
        <h2 className="header">МОИ НАВЫКИ</h2>
        <div className="features">
            <div className="card">
                <span><i className="ri-money-dollar-box-line"></i></span>
                <h4>Уверенное знание React</h4>
                <p>
                    У вас долгое и не оптимизированное приложение? Тогда вы по адресу!
                </p>
                <a href="#">Пригласить <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="card">
                <span><i className="ri-bug-line"></i></span>
                <h4>Исправление багов</h4>
                <p>
                    В вашем приложении много багов? Тогда вы по адресу!                    
                </p>
                <a href="#">Пригласить <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="card">
                <span><i className="ri-history-line"></i></span>
                <h4>Github, npm, git, assebility, sass, vite, webpack</h4>
                <p>
                    Промежуточные технологии сделают нас с вами Сильнее!
                </p>
                <a href="#">Пригласить <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="card">
                <span><i className="ri-shake-hands-line"></i></span>
                <h4>Командная работа</h4>
                <p>
                    Не хватает командной помощи? Пишите мне на Email!
                </p>
                <a href="#">Пригласить <i className="ri-arrow-right-line"></i></a>
            </div>
        </div>
    </section>
    )
}

export default sectionOne