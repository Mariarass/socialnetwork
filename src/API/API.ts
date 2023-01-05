import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'd18b4795-897f-4ae4-98d2-d52211db0d3f'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'


})


export const userAPI = {

    getUsers: (currentPage: number) => {
        return instance.get(`users?page=${currentPage}`)
            .then(res => res.data)

    },

    deleteFollow: (id: string) => {

        return instance.delete(`follow/${id}`).then(res => res.data)
    },
    postFollow: (id: string) => {

        return instance.post(`follow/${id}`).then(res => res.data)
    },

    getUser: (id: number, myId: number | null) => {


        return instance.get(`profile/${id != null ? id : myId}`).then((res) => res.data)

    },
    getStatus: (id: number, myId: number | null) => {

        return instance.get(`profile/status/${id != null ? id : myId}`).then((res) => res.data)

    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status}).then((res) => res.data)

    },
    getAuth: () => {
        return instance.get(`auth/me`).then((res) => res.data)
    },
    login: (email: string, password: string, rememberMe: boolean) => {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(res => res.data)


    },
    logout: () => {
        return instance.delete(`auth/login`).then(res => res.data)
    }

}
