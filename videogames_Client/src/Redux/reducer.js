import {
    GET_VIDEOGAMES,
    POST_VIDEOGAME,
    GET_ID,
    FILTER_VIDEOGAME,
    ORDER_VIDEOGAME,
} from './actiontypes';

const initialState = {
    allVideogames : [] ,
    form: [],
    filteredVideogames: [],
    filter: false,
    orderedVideogames: [],
    videogameDetail: [],
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
        case GET_ID:
            return {
                ...state,
                videogameDetail: action.payload,
            }
        case FILTER_VIDEOGAME:
            console.log('inside the filter_videogame reducer');
            return {
                ...state,
                filter: true,
                filteredVideogames: state.allVideogames.filter((videogame) => 
                    videogame.name.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };
        case ORDER_VIDEOGAME:
            return {
                ...state,
                orderedVideogames: action.payload,
            };
        default: return state;
    };
};

export default rootReducer;