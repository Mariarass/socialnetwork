import {AppRootStateType} from "../store";
import {currentProfile, PostType} from "../reducers/profile-reducer";

export const profileSelectors = (state: AppRootStateType): currentProfile | null => state.profile.profile
export const statusSelectors = (state: AppRootStateType): string | '' => state.profile.status
export const isFetchingProfileSelector = (state: AppRootStateType): boolean => state.profile.isFetchingProfile
export const statusSelector = (state: AppRootStateType): PostType[] => state.profile.post