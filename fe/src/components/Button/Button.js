import React from 'react';
import './Button.scss'
import { BsFillMenuButtonFill } from "react-icons/bs";

function Button({
    className="",
    text="button",
    icon =<BsFillMenuButtonFill />,
    type =""
}) {
    return (
        <button className={`button ${type} ${className}`} >
            {icon !== '' &&  <div className='icon'>{icon}</div>}
            {text !== '' &&  <div className='text'>{text}</div>}
        </button>
    );
}

export default Button;