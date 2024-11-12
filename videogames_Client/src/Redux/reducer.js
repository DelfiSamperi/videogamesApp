import {
    GET_VIDEOGAMES,
    GET_GENRES,
    POST_VIDEOGAME,
    GET_ID,
    FILTER_VIDEOGAME,
    ORDER_VIDEOGAME,
    GET_BY_NAME,
    PAGINATE,
} from './actiontypes';

const initialState = {
    allVideogames: [],
    auxVideogames: [],
    form: [],
    filteredVideogames: [],
    auxFilteredVideogames: [],
    filter: false,
    orderedVideogames: [],
    videogameDetail: [],
    allGenres: [],
    videogameByName: [],
    currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
    const ITEMS_PER_PAGE = 8;
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload,
                auxVideogames: [...action.payload].splice(0, ITEMS_PER_PAGE),
                filter: false,
                //auxFilteredVideogames: [...action.payload].splice(0, ITEMS_PER_PAGE),
            };
        case GET_GENRES:
            return {
                ...state,
                allGenres: action.payload,
            };
        case POST_VIDEOGAME:
            return {
                ...state,
                form: action.payload,
            };
        case GET_ID:
            console.log('dentro del reducer get_id');
            return {
                ...state,
                videogameDetail: action.payload,
                // videogameDetail: state.allVideogames.filter((videogame) => 
                // videogame.id === action.payload),
            };
        case GET_BY_NAME:
            return {
                ...state,
                //videogameByName: action.payload,
                videogameByName: allVideogames.filter((videogame) =>
                    videogame.name.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };
        case FILTER_VIDEOGAME:
            console.log('entra al case filter del reducer');
            state.filteredVideogames = state.allVideogames.filter((videogame) =>
                videogame.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            console.log("los filtered: ", state.filteredVideogames);

            return {
                ...state,
                filter: true,
                currentPage: 1,
                auxFilteredVideogames: [...state.filteredVideogames].splice(0, ITEMS_PER_PAGE),
            };
        case ORDER_VIDEOGAME:
            switch (action.payload) {
                case 'AZ':
                    console.log('dentro de case AZ');
                    let asc = [...state.auxVideogames].sort((prev, next) => {
                        if (prev.name > next.name) return 1
                        if (prev.name < next.name) return -1
                        return 1
                    })
                    return {
                        ...state,
                        allVideogames: [...asc].splice(0, ITEMS_PER_PAGE),
                        auxVideogames: asc,
                        currentPage: 1
                    }
                case 'ZA':
                    console.log('dentro de case ZA');
                    let desc = [...state.auxVideogames].sort((prev, next) => {
                        if (prev.name > next.name) return -1
                        if (prev.name < next.name) return 1
                        return 1
                    })
                    return {
                        ...state,
                        allVideogames: [...desc].splice(0, ITEMS_PER_PAGE),
                        auxVideogames: desc,
                        currentPage: 1
                    };
            }
            return {
                ...state,
                orderedVideogames: action.payload,
            };
        case PAGINATE:
            const nextPage = state.currentPage + 1;
            const prevPage = state.currentPage - 1;
            console.log(action.payload);
            const firstIndex = action.payload === 'next' ? (state.currentPage * ITEMS_PER_PAGE) : ((prevPage - 1) * ITEMS_PER_PAGE);
            //filter prev y next -> ahora andan perfectos pero alta quemada de pestañas
            if (state.filter) {

                if (firstIndex >= state.filteredVideogames.length || firstIndex < 0) {
                    console.log('no sigue porque llego al limite');
                    return { ...state }
                };
                console.log('dentro del filter, firstIndex: ', firstIndex);

                return {
                    ...state,
                    auxFilteredVideogames: [...state.filteredVideogames].splice(firstIndex, ITEMS_PER_PAGE),
                    currentPage: action.payload === 'next' ? nextPage : prevPage,
                };
            };

            if (firstIndex >= state.allVideogames.length || firstIndex < 0) {
                console.log('no sigue porque llego al limite');
                return { ...state }
            };
            console.log("first index: ", firstIndex);
            console.log('all videogames: ', state.allVideogames);
            return {
                ...state,
                auxVideogames: [...state.allVideogames].splice(firstIndex, ITEMS_PER_PAGE),
                currentPage: action.payload === 'next' ? nextPage : prevPage,
            };

        default: return { ...state }
    };
};

export default rootReducer;