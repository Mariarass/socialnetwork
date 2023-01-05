import React from 'react';
import './Button.css'


type ButtonType={
    children: JSX.Element
    class?:string

    callback:()=>void}


const Button = (props:ButtonType) => {
    return (
        <button  onClick={props.callback} className={props.class!='active'?'button':'button button_active'}>

            {props.children}

        </button>

    );
};

export default Button;