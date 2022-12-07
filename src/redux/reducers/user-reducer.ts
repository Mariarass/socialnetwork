import {userAPI} from "../../API/API";
import {Action, AnyAction, Dispatch} from "redux";
import { ThunkAction } from 'redux-thunk'
import {AppRootStateType} from "../store";

const SET_USER = 'SET-USER'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'


export type UserType = {
    id: number
    name: string
    followed: boolean
    photo: string
    status: string
}
export type UserReducerType = {
    user: UserType[]
    totalUserCount: number
    currentPage: number
    followingInProgress: string[]
}

const initialState: UserReducerType = {
    user: [],
    totalUserCount: 0,
    currentPage: 1,
    followingInProgress: []
}

type TypeSetUserAC = ReturnType<typeof setUserAC>
type TypeSetTotalCountAC = ReturnType<typeof setTotalCountAC>
type TypeSetCurrentPageAC = ReturnType<typeof setCurrentPageAC>
type TypeFollowAC = ReturnType<typeof setFollowAC>
type TypeUnfollowAC = ReturnType<typeof setUnfollowAC>


type ActionType = TypeSetUserAC | TypeSetTotalCountAC | TypeSetCurrentPageAC | TypeFollowAC | TypeUnfollowAC

export const userReducer = (state = initialState, action: any) => {//???????????????7

    switch (action.type) {


        case SET_USER: {
            return {
                ...state,
                user: [...action.users]

            }

        }
        case SET_TOTAL_COUNT: {

            return {
                ...state,
                totalUserCount: action.count
            }
        }
        case SET_CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.page

            }

        }

        case FOLLOW: {
            return {
                ...state,
                user: state.user.map(el => el.id === action.userId ? {...el, followed: true} : el)

            }

        }
        case UNFOLLOW: {
            return {
                ...state,
                user: state.user.map(el => el.id === action.userId ? {...el, followed: false} : el)

            }

        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el != action.userId)


            }

        }

        default: {
            return state
        }

    }

}

export const setUserAC = (users: UserType[]) => {
    return {type: SET_USER, users}
}
export const setTotalCountAC = (count: number) => {
    return {type: SET_TOTAL_COUNT, count}
}

export const setCurrentPageAC = (page: number) => {
    return {type: SET_CURRENT_PAGE, page}
}

export const setFollowAC = (userId: string) => {
    return {type: FOLLOW, userId}
}
export const setUnfollowAC = (userId: string) => {
    return {type: UNFOLLOW, userId}
}

export const toggleIsFollowingAC = (isFetching: boolean, userId: string) => {
    return {type: TOGGLE_IS_FOLLOWING, isFetching, userId}
}


/*
export const getUsersThunk=(currentPage: number):
    ThunkAction<void, AppRootStateType, unknown, AnyAction> =>{
    return (dispatch: any) => {
        console.log(2)


        userAPI.getUsers(currentPage).then(data => {
            console.log(data)
            dispatch(setUserAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))


        }).catch(error => {
            console.log(error)
        })
    }
}
*/

