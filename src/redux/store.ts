import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'

import {ActionTypeAuth, authReducer} from "./reducers/auth-reducer";
import {ActionTypeUser, userReducer} from "./reducers/user-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {ActionTypeProfile, profileReducer} from "./reducers/profile-reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    profile: profileReducer

})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export type AppActionType = ActionTypeAuth|ActionTypeProfile |ActionTypeUser

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>
// @ts-ignore
window.store = store