import {axiosService} from "./axioservice";
import {urls} from "../config";

const todosService = {
    getAll:()=>axiosService.get(urls.todos),
}

export {
    todosService
}