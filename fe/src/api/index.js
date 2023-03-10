import axios from "axios"
import { API_URI } from "../utilities/constants"

// BOARD
export const fetchDataBoard = async (boardId) => {
    const request = await axios.get(`${API_URI}/v1/board/${boardId}`);
    console.log(request);
    return request.data;
}
// COLUMN
export const createNewColumn = async (data) => {
    const request = await axios.post(`${API_URI}/v1/column`, data);
    console.log(request);
    return request.data;
}
// CARD
export const createNewCard = async (data) => {
    const request = await axios.post(`${API_URI}/v1/card`, data);
    console.log(request);
    return request.data;
}


