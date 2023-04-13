import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/catalog';

export const getAll = () => {
    request.get(baseUrl);
}

export const createMeme = (data) => {
    request.post(baseUrl, data);
}