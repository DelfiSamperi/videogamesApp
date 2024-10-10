import { 
    POST_VIDEOGAME,
    GET_VIDEOGAMES,
    ORDER_VIDEOGAME,
    FILTER_VIDEOGAME,
    GET_ID,
} from "./actiontypes";
import axios from 'axios';

export const postVideogame = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3000/videogames', data);
            console.log(response);                
            dispatch({
                type: POST_VIDEOGAME,
                payload: "",
            })
            alert('videogame creado con exito!!');
        }
        catch (error) {
            alert('no se pudo crear por errores: ', error.response.data.error);
            throw new Error(error.message);
        };
    };
};

export const getVideogames = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get('http://localhost:3000/videogames');
            dispatch({
                type: GET_VIDEOGAMES,
                payload: response.data,
            });
        }
    } catch (error) {
        alert('no se pudo crear por errores: ', error.response.data.error);
        throw new Error(error.message);
    };
};

//not working 
export const getVideogameById = (id) => {
    try {
        console.log('entró al getById');
        return async (dispatch) => {
            const response = await axios.get(`http://localhost:3000/videogames/${id}`);
            dispatch({
                type: GET_ID,
                payload: response.data,
            });
        };
    } catch (error) {
        throw new Error(error.response.data.error);
    };
};

export const filterVideogames = (name) => {
    try {
        console.log('entró al try de filterVideogames')
        return async (dispatch) => {
            dispatch({
                type: FILTER_VIDEOGAME,
                payload: name,
            })
        };
    } catch (error) {
        throw new Error(error.message);
    };
};

export const orderVideogames = (order) => {
    try {
        console.log('entro al try de orderVideogames');
        return async (dispatch) => {
            dispatch({
                type: ORDER_VIDEOGAME,
                payload: order,
            })
        };
    } catch (error) {
        throw new Error(error.message);
    };
};