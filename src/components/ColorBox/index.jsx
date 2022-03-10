import React, { useState } from 'react';
import "./style.scss"

const ColorBox = props => {
    const listColor = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const [color, setColor] = useState(() => {
        return localStorage.getItem('Color') || 'deeppink'
    })

    const handleChangeColor = () =>{
        const randomColor = listColor[Math.floor(Math.random() * listColor.length)]
        localStorage.setItem('Color', randomColor);
        setColor(randomColor)
    }
    return (
        <div>
            <div 
                className={'box'} 
                style={{background: color}}
                onClick={handleChangeColor}
            ></div>
        </div>
    );
};

ColorBox.propTypes = {
    
};


export default ColorBox;