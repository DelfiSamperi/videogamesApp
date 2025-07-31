// HOME PAGE |** la página principal de tu SPA debe contener:

// -  SearchBar: un input de búsqueda para encontrar videojuegos por nombre.
// -  Botones/Opciones para **filtrar** por género, y por si su origen es de la API o de la
//  base de datos (creados por nosotros desde el formulario).
// -  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los 
// videojuegos por orden alfabético y por rating.
// -  Paginado: el listado de videojuegos se hará por partes. Tu SPA debe contar con un 
// paginado que muestre un total de 15 videojuegos por página.

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import './home.css';
import { 
    filterVideogames,
    getGenres,
    getVideogameName,
    getVideogames,
    paginate,
    orderVideogames
} from "../../Redux/actions";

const Home = () => {
    const dispatch = useDispatch();

    //const allGenres = useSelector((state)=> state.allGenres);
    //const allVideogames = useSelector((state) => state.allVideogames);
    const auxVideogames = useSelector((state) => state.auxVideogames);
    const filter = useSelector((state) => state.filter);
    //const filteredVideogames = useSelector((state) => state.filteredVideogames);
    //const auxFilteredVideogames = useSelector((state) => state.auxFilteredVideogames);
    //const videogameByName = useSelector((state) => state.videogameByName);
    const ITEMS_PER_PAGE = 8;
    const page = useSelector((state) => state.currentPage);
    
    //segun chatgpt:
    const videogames = useSelector((state)=> (filter ? state.auxFilteredVideogames : state.auxVideogames));
    //const currentVideogames = videogames.slice(0, ITEMS_PER_PAGE);
    const orderedVideogames = useSelector((state) => (state.orderedVideogames));
    //PAGINADO
    //const [currentPage, setCurrentPage] = useState(0);
    //trabaja con el estado allVideogames
    //const [item, setItem] = useState([...allVideogames].splice(0, ITEMS_PER_PAGE));
    //el estado filteredVideogames
    //const [filteredItems, setFilteredItems] = useState([...filteredVideogames].splice(0, ITEMS_PER_PAGE));
        
    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
        console.log('aca se monta el componente');
        console.log('you are in page: ', page);
    }, []);
    /*
    useEffect(() => {
        console.log('se modificó el componente');
        //setItem([...allVideogames].splice(0, ITEMS_PER_PAGE));
        //setFilteredItems([...filteredVideogames].splice(0, ITEMS_PER_PAGE));
    }, [allVideogames, filteredVideogames]);
    */
    useEffect(()=> {
        //el desmonte siempre en un return
        return ()=> {
            console.log('se desmonto el componente');
        };
    }, []);

    const nextPage = () => {
        dispatch(paginate('next'));
        /*
        const next = currentPage + 1;
        const firstIndex = (currentPage * ITEMS_PER_PAGE);
        if (filter) {
            if (firstIndex < filteredVideogames.length) {
                setCurrentPage(next);
                setFilteredItems([...filteredVideogames].splice(firstIndex, ITEMS_PER_PAGE));
                console.log('dentro del filter, page : ', next);
                console.log(firstIndex);
            };
        } else {
            if (firstIndex < allVideogames.length) {
                setCurrentPage(next);
                setItem([...allVideogames].splice(firstIndex, ITEMS_PER_PAGE));
                console.log('fuera del filter, page : ', next);
                console.log(firstIndex);
            };
        }; */
    };

    const prevPage = () => {
        dispatch(paginate('prev'));
        /*
        const prev = currentPage - 1;
        const firstIndex = (prev - 1) * ITEMS_PER_PAGE;
        if (filter) {
            if (firstIndex >= 0) {
                setCurrentPage(prev);
                setFilteredItems([...filteredVideogames].splice(firstIndex, ITEMS_PER_PAGE));
                console.log('dentro del filter, page : ', prev);
                console.log(firstIndex);
            };
        } else {
            if (firstIndex >= 0) {
                setCurrentPage(prev);
                setItem([...allVideogames].splice(firstIndex, ITEMS_PER_PAGE));
                console.log('fuera del filter, page : ', prev);
                console.log(firstIndex);
            };
        }; */
    };

    const filtered = () => {
        dispatch(filterVideogames('o'));
    };

    const orderAsc = () => {
        dispatch(orderVideogames('AZ'));
    };

    const orderDesc = () => {
        dispatch(orderVideogames('ZA'));
    };

    const onSearch = (name) => {
        console.log('aca se hace la busqueda por nombre');
        dispatch(getVideogameName(name));
    };

    return (
        <div className="home-container">
            < SearchBar onSearch={onSearch} />
            <div className="pagination">
                <button name='prev' onClick={prevPage} disabled={page === 1}>Prev</button>
                <button disabled>{page}</button>
                <button name='next' onClick={nextPage}>Next</button>
                <button name='AZ' onClick={orderAsc}>A-Z</button>
                <button name='ZA' onClick={orderDesc}>Z-A</button>
                <button onClick={filtered}>Filtrar " O "</button>
            </div>
            <Cards videogames={videogames} />
            
        </div>
    )
};

export default Home;