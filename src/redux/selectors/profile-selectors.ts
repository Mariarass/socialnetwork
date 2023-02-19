import {AppRootStateType} from "../store";

export const profileSelector = (state: AppRootStateType) => state.profile.profile
export const statusSelector = (state: AppRootStateType) => state.profile.status
export const isFetchingProfileSelector = (state: AppRootStateType) => state.profile.isFetchingProfile
export const postSelector = (state: AppRootStateType) => state.profile.post
export const isLoadingPhotoSelector = (state: AppRootStateType) => state.profile.isLoadingPhoto
export const photosSelector = (state: AppRootStateType) => state.profile.profile.photos