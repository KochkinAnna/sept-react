import {axiosService} from "./axiosService";

const postService ={
    getByUserID:(userId)=>axiosService.get('/posts', {params: {userId}})
}
export {
    postService
}