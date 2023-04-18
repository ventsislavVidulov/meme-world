import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/catalog';

export const getAll = () => {
    return request.get(baseUrl);
}

export const getOne = (memeId) => {
    return request.get(`${baseUrl}/${memeId}`);
}

export const createMeme = (data) => {
    return request.post(baseUrl, data);
}

export const editMeme = (memeId, data) => {
    // console.log(data);
    return request.put(`${baseUrl}/${memeId}`, data);
}

export const deleteMeme = (memeId) => {
    return request.del(`${baseUrl}/${memeId}`)
}