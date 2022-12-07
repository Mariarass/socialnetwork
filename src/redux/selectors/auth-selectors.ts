import {AppRootStateType} from "../store";

export const isAuthSelector = (state: AppRootStateType):boolean =>  {
    return (state.auth.isAuth)
}
