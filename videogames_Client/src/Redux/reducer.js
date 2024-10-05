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
            return {
                ...state,
                allVideogames: action.payload,
            };
        
        case POST_VIDEOGAME:
            return {
                ...state,
                form: action.payload,
            };

        default:
            return state;
    };
};

export default rootReducer;