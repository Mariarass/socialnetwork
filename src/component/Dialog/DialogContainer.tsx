import React, {useEffect} from 'react';


import {useSelector} from "react-redux";
import {isAuthSelector} from "../../redux/selectors/auth-selectors";
import {useNavigate} from "react-router-dom";
import {Dialog} from './Dialog';

const DialogContainer = () => {

        const higherOrderComponent =(WrappedComponent:any) => {
            const  HOC=()=>{
                const isAuth=useSelector(isAuthSelector)
                const navigate=useNavigate()
                useEffect(()=>{
                    if(!isAuth){
                    navigate('/login')}
                })

                return WrappedComponent
            }

            return HOC
        }
    const SimpleHOC = higherOrderComponent(<Dialog/>);

        return (
            <div>
                <SimpleHOC/>


            </div>
        );
    }
;

export default DialogContainer;