import { 
    POST_VIDEOGAME,
    GET_VIDEOGAMES,
    ORDER_VIDEOGAME,
    FILTER_VIDEOGAME,
    GET_ID,
    GET_GENRES,
    GET_BY_NAME,
    PAGINATE,
} from "./actiontypes";
import axios from 'axios';

export const postVideogame = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3000/videogames', data);
            console.log(response.data);                
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
        };
    } catch (error) {
       throw new Error(error.message);
    };
};

export const getGenres = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get('http://localhost:3000/genres');
            dispatch({
                type: GET_GENRES,
                payload: response.data,
            });
            console.log('genres loaded');
        };
    } catch (error) {
        throw new Error(error.message);
    };
};

export const getVideogameById = (id) => {
    try {
        console.log('entró al getById');
        return async (dispatch) => {
            const {data} = await axios.get(`http://localhost:3000/videogames/${id}`);
            console.log(data);
            dispatch({
                type: GET_ID,
                payload: data,
            });
        };
    } catch (error) {
        throw new Error(error.message);
    };
};

export const getVideogameName = (name) => {
    try {
        console.log('action que busca el nombre');
        return async (dispatch) => {
            const response = await axios.get(`http://localhost:3000/videogames?name=${name}`);
            dispatch({
                type: GET_BY_NAME,
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

export const paginate = (option) => {
    console.log('el paginado desde actions');
    try {
        return async (dispatch) => {
            dispatch({
                type: PAGINATE,
                payload: option,
            })
        }
    } catch (error) {
      throw new Error(error.message);
    };
};