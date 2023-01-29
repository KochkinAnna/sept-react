import {axiosService} from "./axioservice";
import {urls} from "../config";

const usersService = {
    getAll:()=>axiosService.get(urls.users)
}

export {
    usersService
}