import React, {useEffect, useRef} from "react";

import './index.css'

function FirstAnim() {    
    useEffect(() => {
            const timeoutId = setTimeout(() => {
                document.querySelector('.first-animation').style.display = 'none'
            }, 3000);
            
            // Очищаем таймер при размонтировании компонента
            return () => clearTimeout(timeoutId);
    }, []); 
    return (
        <div className="first-animation">
            <div className="slider slider-one"></div>

            <div className="slider-top"></div>

            <div className="slider slider-two"></div>
        </div>
    )
}

export default FirstAnim