import {axiosService} from "./axiosService";

import {urls} from "../config";

const postsService = {
    getAll:()=>axiosService.get(urls.posts),
}

export {
    postsService
}