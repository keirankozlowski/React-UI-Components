import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return(
        <button>{props.text}</button>
    );
}

export default NumberButton;