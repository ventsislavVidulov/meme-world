import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/catalog';

export const getAll = () => {
    return request.get(baseUrl);
}

export const createMeme = (data) => {
   return request.post(baseUrl, data);
}