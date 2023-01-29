import {axiosService} from "./axioservice";
import {urls} from "../config";

const albumsService = {
    getAll:()=>axiosService.get(urls.albums),
}

export {
    albumsService
}