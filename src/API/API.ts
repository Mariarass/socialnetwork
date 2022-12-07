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

        return instance.delete(`follow/${id}`).then(res=>res.data)
    },
    postFollow: (id: string) => {

        return instance.post(`follow/${id}`).then(res=>res.data)
    },


}
