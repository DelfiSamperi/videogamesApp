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
import Cards from "../Components/Cards/Cards";
import { filterVideogames, getVideogames } from "../Redux/actions";
import SearchBar from "../Components/SearchBar";

const Home = () => {
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.allVideogames);
    const filter = useSelector((state) => state.filter);
    const filteredVideogames = useSelector((state) => state.filteredVideogames);
    const ITEMS_PER_PAGE = 8;

    //PAGINADO
    const [currentPage, setCurrentPage] = useState(1);
    //trabaja con el estado allVideogames
    const [item, setItem] = useState([...allVideogames].splice(0, ITEMS_PER_PAGE));
    //el estado filteredVideogames
    const [filteredItems, setFilteredItems] = useState([...filteredVideogames].splice(0, ITEMS_PER_PAGE));

    useEffect(() => {
        dispatch(getVideogames());
        console.log('total of videogames: ', allVideogames.length);
        console.log(allVideogames);
        console.log(currentPage);
    }, []);

    useEffect(() => {
        setItem([...allVideogames].splice(0, ITEMS_PER_PAGE));
        setFilteredItems([...filteredVideogames].splice(0, ITEMS_PER_PAGE));
    }, [allVideogames, filteredVideogames]);

    const nextPage = () => {
        const next = currentPage + 1;
        const firstIndex = (currentPage * ITEMS_PER_PAGE);
        if (filter) {
            //recontra andando!!!
            while (firstIndex < filteredVideogames.length) {
                setCurrentPage(next);
                setFilteredItems([...filteredVideogames].splice(firstIndex, ITEMS_PER_PAGE));
                console.log('dentro del filter, page : ', next);
                console.log(firstIndex);
                break;
            };
        } else {
            // este anda bien
            while (firstIndex < allVideogames.length) {
                setCurrentPage(next);
                setItem([...allVideogames].splice(firstIndex, ITEMS_PER_PAGE));
                console.log('fuera del filter, page : ', next);
                console.log(firstIndex);
                break;
            };
        };
    };

    const prevPage = () => {
        const prev = currentPage - 1;
        const firstIndex = (prev - 1) * ITEMS_PER_PAGE;
        if (filter) {
            //ahora siiii  !!!
            while (firstIndex >= 0) {
                setCurrentPage(prev);
                setFilteredItems([...filteredVideogames].splice(firstIndex, ITEMS_PER_PAGE));
                console.log('dentro del filter, page : ', prev);
                console.log(firstIndex);
                break; //sin el break se pone infinito, buscar mejores opciones
            };
        } else {
            //RECONTRA ANDANDO!!!!!
            while (firstIndex >= 0) {
                setCurrentPage(prev);
                setItem([...allVideogames].splice(firstIndex, ITEMS_PER_PAGE));
                console.log('fuera del filter, page : ', prev);
                console.log(firstIndex);
                break;
            };
        };
    };

    const filtered = () => {
        dispatch(filterVideogames('o'));
        setCurrentPage(1);
        console.log('page ', currentPage, ' filter: ', filter);
        console.log('total filtered: ', filteredVideogames.length);
        console.log(filteredVideogames);
    };

    return (
        <div className="home-container">
            < SearchBar />
            <button onClick={prevPage}>Prev</button>
            <button>{currentPage}</button>
            <button onClick={nextPage}>Next</button>
            <button onClick={filtered}>Filtrar " O "</button>
            <Cards videogames={filter ? filteredItems : item} />
        </div>
    )
};

export default Home;