import { SAVE_DATA, GET_DATA, DELETE_DATA } from "./types";

export const saveData = (data) => {
    return {
        type: SAVE_DATA,
        payload: data
    };
};

export const getData = () => {
    return {
        type: GET_DATA,
    };
};

export const deleteData = (id) => {
    return {
        type: DELETE_DATA,
        payload: id,
    };
};