import {axiosService} from "./axioservice";
import {urls} from "../config";

const postService = {
    getAll:()=>axiosService.get(urls.posts),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {
    postService
}