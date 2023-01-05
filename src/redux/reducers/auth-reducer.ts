import {userAPI} from "../../API/API";
import {Dispatch} from "redux";
import {AppActionType, AppThunk} from "../store";

const SET_USER_DATA = 'SET-USER-DATA'

export type AuthState = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean

}

const initialState: AuthState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false

}

type setUserDataType = ReturnType<typeof setUserDataAC>
export type ActionTypeAuth = setUserDataType


export const authReducer = (state = initialState, action: ActionTypeAuth) => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth

            }

        }
        default: {
            return state
        }

    }

}
export const setUserDataAC = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {type: SET_USER_DATA, data: {userId, login, email, isAuth}}

}


export const getAuthThunk = (): AppThunk => async dispatch => {//Dispatch<AppActionType>
    const data = await userAPI.getAuth()
    if (data.resultCode === 0) {
        const {email, id, login} = data.data
        dispatch(setUserDataAC(id, login, email, true))
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean, setStatus: any): AppThunk => async dispatch => {

    const data = await userAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(setUserDataAC(data.data.userId, password, email, true))
    } else {
        setStatus({message: data.messages})
    }


}
export const logoutThunk = (): AppThunk => async dispatch => {
    const data = await userAPI.logout()
    dispatch(setUserDataAC(null, null, null, false))

}
