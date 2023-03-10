import axios from "axios"
import { API_URI } from "../utilities/constants"

// BOARD
export const fetchDataBoard = async (id) => {
    const request = await axios.get(`${API_URI}/v1/board/${id}`);
    console.log(request);
    return request.data;
}

export const createBoard = async () => {
    const request = await axios.post(`${API_URI}/v1/board`);
    console.log(request);
    return request.data;
}

export const updateBoard = async () => {
    const request = await axios.put(`${API_URI}/v1/board`);
    console.log(request);
    return request.data;
}

export const deleteBoard = async () => {
    const request = await axios.delete(`${API_URI}/v1/board`);
    console.log(request);
    return request.data;
}

// Column
export const createColumn = async (idBoard) => {
    const request = await axios.post(`${API_URI}/v1/column`);
    console.log(request);
    return request.data;
}

export const updateColumn = async (idColumn) => {
    const request = await axios.put(`${API_URI}/v1/column`);
    console.log(request);
    return request.data;
}

export const deleteColumn = async (apiColumn) => {
    const request = await axios.delete(`${API_URI}/v1/column`);
    console.log(request);
    return request.data;
}
// CARD
export const createCard = async () => {
    const request = await axios.post(`${API_URI}/v1/card`);
    console.log(request);
    return request.data;
}

export const updateCard = async (idCard) => {
    const request = await axios.put(`${API_URI}/v1/card`);
    console.log(request);
    return request.data;
}

export const deleteCard = async (idCard) => {
    const request = await axios.delete(`${API_URI}/v1/card`);
    console.log(request);
    return request.data;
}

