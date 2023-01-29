import {axiosService} from "./axioservice";
import {urls} from "../config";

const commentsService = {
    getAll:()=>axiosService.get(urls.comments),
}

export {
    commentsService
}