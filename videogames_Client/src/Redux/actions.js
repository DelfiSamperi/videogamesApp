import { POST_VIDEOGAME, GET_VIDEOGAMES } from "./actiontypes";
import axios from 'axios';

export const postVideogame = () => {
    console.log('aca entro a la action');
    try {
        return async (dispatch) => {
            await axios.post('http://localhost:3000/videogames/')
            .then(({data}) => {
                return dispatch({
                    type: POST_VIDEOGAME,
                    payload: data,
                })
            })
            .then(alert('videogame creado con exito!!'));
        }
    } catch (error) {
        alert('no se pudo crear por errores: ', error);
        throw new Error(error.message);
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
        throw Error(error.message);
    };
};