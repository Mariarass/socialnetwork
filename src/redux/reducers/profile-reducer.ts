import {DataPhotos, userAPI} from "../../API/API";
import {AppThunk} from "../store";

export type currentProfile = {
    aboutMe: string
    contacts: {}
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string,
        large: string
    }
    userId: number
}
export type PostType = {
    id: string
    message: string
    like: number
    data: string
    img: string
}
export type UserReducerType = {
    post: PostType[]
    profile: currentProfile
    status: string
    isFetchingProfile: boolean
    isLoadingPhoto: boolean

}

const initialState: UserReducerType = {
    post: [
        {id: "1", message: 'hello', like: 10, data: '2023-01-29', img: ''},
        {
            id: "2", message: 'I\'m a result oriented front-end developer with\n' +
                'experience in creating Landing Pages and SPA, using\n' +
                'React(JS/TS), Redux, HTML & CSS', like: 100, data: '2023-01-29', img: ''
        },
    ],
    profile: {} as currentProfile,
    status: '',
    isFetchingProfile: false,
    isLoadingPhoto: false
}


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
                post: [action.post, ...state.post]
            }
        }
        case 'ADD-LIKE': {
            return {
                ...state,
                post: state.post.map(el => el.id === action.idPost ? {...el, like: el.like + 1} : el)

            }

        }
        case 'DELETE-LIKE': {
            return {
                ...state,
                post: state.post.map(el => el.id === action.idPost ? {...el, like: el.like - 1} : el)

            }

        }
        case 'DELETE-POST': {
            return {
                ...state,
                post: state.post.filter(el => el.id != action.idPost)

            }

        }
        case 'SAVE-PHOTO': {
            return {
                ...state,
                profile: {
                    ...state.profile, photos: action.file
                }

            }

        }
        case "SET-IS-LOADING-PHOTO": {
            return {
                ...state,
                isLoadingPhoto: action.isLoading
            }
        }

        default:
            return state
    }


}
export const setProfileAC = (profile: currentProfile) => {
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
export const addLike = (idPost: string) => {
    return {type: 'ADD-LIKE', idPost} as const
}
export const deleteLike = (idPost: string) => {
    return {type: 'DELETE-LIKE', idPost} as const
}

export const deletePost = (idPost: string) => {
    return {type: 'DELETE-POST', idPost} as const
}
export const setPhoto = (file: DataPhotos) => {
    return {type: 'SAVE-PHOTO', file} as const
}
export const setIsLoadingPhotoAC = (isLoading: boolean) => {
    return {type: 'SET-IS-LOADING-PHOTO', isLoading} as const
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
export const uploadPhotoThunk = (file: any): AppThunk => async dispatch => {
    dispatch(setIsLoadingPhotoAC(true))
    const data = await userAPI.savePhoto(file)
    if (data.resultCode === 0) {
        console.log('cool')
        dispatch(setPhoto(data.data.photos))
        dispatch(setIsLoadingPhotoAC(false))

    }
}


type TypeSetProfileAC = ReturnType<typeof setProfileAC>
type TypeSetStatusAC = ReturnType<typeof setStatusAC>
type TypeIsFetchingProfileAC = ReturnType<typeof setIsFetchingProfileAC>
type TypeSetPostsAC = ReturnType<typeof setPostAC>
type TypeAddLike = ReturnType<typeof addLike>
type TypeDeleteLike = ReturnType<typeof deleteLike>
type TypeDeletePost = ReturnType<typeof deletePost>
type TypeSetPhoto = ReturnType<typeof setPhoto>
type TypeIsLoadingPhoto = ReturnType<typeof setIsLoadingPhotoAC>


export type ActionTypeProfile =
    TypeSetProfileAC
    | TypeSetStatusAC
    | TypeIsFetchingProfileAC
    | TypeSetPostsAC
    | TypeAddLike
    | TypeDeleteLike
    | TypeDeletePost
    | TypeSetPhoto
    | TypeIsLoadingPhoto