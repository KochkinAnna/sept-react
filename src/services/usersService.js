import {axiosService} from "./axiosService";
import {urls} from "../config";

const usersService= {
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`)
}

export {
    usersService
}