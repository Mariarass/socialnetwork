import React from 'react';
import './Input.css'
type InputType={
    class:string
    value:string
    placeholder?:string
    setValue:(value:string)=>void
    callback?:()=>void
}

const Input = (props:InputType) => {

    return (

            <input placeholder={props.placeholder&&props.placeholder} className={props.class} value={props.value} onChange={(e)=>props.setValue(e.target.value)} type='textarea'
            onKeyPress={(event) => {
                if (event.key === 'Enter') {
                    props.callback&&props.callback()
                }

            }}/>



    );
};

export default Input;