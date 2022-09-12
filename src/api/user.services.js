import http from "../api/http2-common";

export const getAll = (page) => {
    return http.get(`/user/?page=${page}&limit=${5}`)
}

const userService = {
    getAll
}

export default userService;