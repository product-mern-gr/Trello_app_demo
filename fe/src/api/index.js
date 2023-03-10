import axios from "axios"
import { API_URI } from "../utilities/constants"

// BOARD
export const fetchDataBoard = async (boardId) => {
    const request = await axios.get(`${API_URI}/v1/board/${boardId}`);
    console.log(request);
    return request.data;
}


