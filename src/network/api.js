import { request } from "./request";

export function getWen(){
    return request({
        url:"/wenzhang"
    })
}