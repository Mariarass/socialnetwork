import {useSelector} from "react-redux";
import {isAuthSelector} from "../redux/selectors/auth-selectors";
import {useNavigate} from "react-router-dom";
import { ComponentType, useEffect} from "react";

export function withRedirect  (WrappedComponent: any)  {
    const ComponentWithRedirect = () => {
    /*    const isAuth = useSelector(isAuthSelector)*/
        const isAuth=true
        const navigate = useNavigate()
        useEffect(() => {
            if (!isAuth) {
                navigate('/login')
            }
        })

        return WrappedComponent
    }

    return ComponentWithRedirect
}