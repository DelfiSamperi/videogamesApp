import {
    GET_VIDEOGAMES,
    POST_VIDEOGAME
} from './actiontypes';

const initialState = {
    allVideogames : [] ,
    form: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
        console.log(action.payload);
        break;

        case POST_VIDEOGAME:
            return {
                ...state,
                form: action.payload,
            };

        default:
        console.log('esta es la salida default del reducer');
        break;
    };
};

export default rootReducer;