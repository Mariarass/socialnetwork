import {AppRootStateType} from "../store";
import {UserReducerType} from "../reducers/user-reducer";

export const currentPageSelector=(state:AppRootStateType):number=>state.user.currentPage
export const totalCountSelector=(state:AppRootStateType):number=>state.user.totalUserCount
export const isFetchingSelector=(state:AppRootStateType):boolean=>state.user.isFetching