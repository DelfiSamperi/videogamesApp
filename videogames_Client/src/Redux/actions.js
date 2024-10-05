import { POST_VIDEOGAME, GET_VIDEOGAMES } from "./actiontypes";
import axios from 'axios';

export const postVideogame = (data) => {
    console.log('aca entro a la action');
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