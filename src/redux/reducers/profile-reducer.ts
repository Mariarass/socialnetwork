import {userAPI} from "../../API/API";
import {AppThunk} from "../store";

const ADDPOST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'


export type currentProfile = {
    aboutMe: string
    contacts: {}
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {}
    userId: number
}
export type PostType = {
    id: string
    message: string
    like: number
}
export type UserReducerType = {
    post: PostType[]
    profile: currentProfile | null
    status: string
    isFetchingProfile: boolean

}

const initialState: UserReducerType = {
    post: [
        {id: "1", message: 'hello', like: 1},
        {id: "2", message: 'How are you', like: 2},
    ],
    profile: null,
    status: '',
    isFetchingProfile: false
}


type TypeSetProfileAC = ReturnType<typeof setProfileAC>
type TypeSetStatusAC = ReturnType<typeof setStatusAC>
type TypeIsFetchingProfileAC = ReturnType<typeof setIsFetchingProfileAC>
type TypeSetPostsAC = ReturnType<typeof setPostAC>

export type ActionTypeProfile = TypeSetProfileAC | TypeSetStatusAC | TypeIsFetchingProfileAC | TypeSetPostsAC

export const profileReducer = (state = initialState, action: ActionTypeProfile) => {
    switch (action.type) {
        case "SET-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-STATUS":
            if (action.status != null) {
                return {
                    ...state,
                    status: action.status

                }
            } else {
                return {...state, status: ''}
            }

        case "IS-FETCHING-PROFILE": {
            return {
                ...state,
                isFetchingProfile: action.isFetching
            }
        }
        case "SET-POSTS": {
            return {
                ...state,
                post: [...state.post, action.post]
            }
        }


        default:
            return state
    }


}
export const setProfileAC = (profile: currentProfile | null) => {
    return {type: 'SET-PROFILE', profile} as const
}

export const setStatusAC = (status: string) => {
    return {type: 'SET-STATUS', status} as const
}

export const setIsFetchingProfileAC = (isFetching: boolean) => {
    return {type: 'IS-FETCHING-PROFILE', isFetching} as const
}
export const setPostAC = (post: PostType) => {
    return {type: 'SET-POSTS', post} as const
}


export const getProfileThunk = (userId: number, myId: number | null): AppThunk => async dispatch => {

    dispatch(setIsFetchingProfileAC(true))
    const data = await userAPI.getUser(userId, myId)
    dispatch(setProfileAC(data))
    dispatch(setIsFetchingProfileAC(false))
}


export const getStatusThunk = (userId: number, myId: number | null): AppThunk => async dispatch => {
    const data = await userAPI.getStatus(userId, myId)
    dispatch(setStatusAC(data))

}

export const updateStatusThunk = (status: string): AppThunk => async dispatch => {
    const data = await userAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }

}