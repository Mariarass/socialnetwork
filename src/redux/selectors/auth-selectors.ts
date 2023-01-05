import {AppRootStateType} from "../store";

export const isAuthSelector = (state: AppRootStateType):boolean =>  {
    return (state.auth.isAuth)
}

export const myIdSelectors = (state: AppRootStateType):number|null =>  {
    return (state.auth.userId)
}
