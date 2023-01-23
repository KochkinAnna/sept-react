import {axiosService} from "./axiosService";

const postService ={
    getByUserID:(userID)=>axiosService.get('/posts', {params: {userID:userID}})
}
export {
    postService
}