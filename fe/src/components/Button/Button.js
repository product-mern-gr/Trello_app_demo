import React from 'react';
import './Button.scss'
import { BsFillMenuButtonFill } from "react-icons/bs";

function Button({
    text="button",
    icon =<BsFillMenuButtonFill />,
    type =""
}) {
    return (
        <button className={`button ${type}`} >
            <div className='icon'>{icon}</div>
            <div className='text'>{text}</div>
        </button>
    );
}

export default Button;