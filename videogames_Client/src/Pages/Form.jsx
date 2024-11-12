// Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden 
// utilizar validaciones HTML, ni utilizar librerías especiales para esto.

import React, { useEffect, useState } from "react";
import './form.css';
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postVideogame } from "../Redux/actions";

//verificacion errores
const validate = (inputs) => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const urlRegex = /^https?:\/\/[^\s$.?#].[^\s]*$/;
    //const wwwRegex = /^www\.[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+\/?$/ ;
    var errors = {};

    if (!inputs.name) errors.name = 'Se requiere un nombre';
    if (inputs.rating < 1 && inputs.rating > 10) errors.rating = 'El puntaje debe ser entre 1 y 10';
    if (!inputs.releaseDate) errors.releaseDate = 'Se requiere una fecha de lanzamiento';
    if (!dateRegex.test(inputs.releaseDate)) errors.releaseDate = 'El formato de fecha debe ser 00/00/0000';
    if (!inputs.platforms) errors.platforms = 'Se requiere al menos una plataforma';
    if (!inputs.description) errors.description = 'Se requiere una descripcion';
    if (inputs.description.length > 200) errors.description = 'La descripcion no puede superar los 200 caracteres';
    if (!inputs.image) errors.image = 'Se requiere una imagen';
    if (!urlRegex.test(inputs.image)) errors.image = 'La url de la imagen no es válida';
    //if (!inputs.genres) errors.genres = 'Se requiere al menos un genero';

    return errors;
};

const Form = () => {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getGenres());
        console.log(allGenres)
    }, []);

    const allGenres = useSelector((state)=> state.allGenres);

    //estado para almacenar valores
    const [inputs, setInputs] = useState({
        name: '',
        image: '',
        description: '',
        releaseDate: '',
        rating: '',
        platforms: [],
        genres: [],
    });

    //verificacion de errores
    const [errors, setErrors] = useState({});

    //hardcodeo, revisar
    const availablePlatforms = ["PC", "PlayStation", "Xbox", "Nintendo Switch", "MacOs", "Android"];
    const availableGenres = ["Acción", "Aventura", "RPG", "Deportes"];

    //manejo cambio de inputs
    const handleChange = (event) => {
        if(event.target.name === 'platforms' || event.target.name === 'genres') {
            if(inputs.platforms.includes(event.target.value)) return;
            if(inputs.genres.includes(event.target.value)) return;
            setInputs({
                ...inputs,
                [event.target.name]: [...inputs[event.target.name], event.target.value] 
            })
        } else {
            setInputs({
                ...inputs,
                [event.target.name]: event.target.value,
            })
        };
        
        setErrors(
            validate({
                ...inputs,
                [event.target.name]: event.target.value,
            })
        )
    };

    const disable = () => {
        let auxDisabled = true;
        for (let error in errors){
            if(errors[error]==='') auxDisabled = false;
            else {
                auxDisabled = true;
                break;
            };
        };
        return auxDisabled;
    };

    //envio de formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errors.length) {
            console.log('mandando los inputs', inputs)
            dispatch(postVideogame(inputs));
        } else {
            console.log('hay errores', errors);
        };
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h3>Add a new Videogame:</h3>
            <fieldset>
                <label>Enter Videogame Name:
                    <input className={'warning' && errors.name} onChange={handleChange} value={inputs.name} name="name" type="text" placeholder='your new videogame' />
                </label>
                <p className="danger">{errors.name}</p>
                <label> Date of release:
                    <input className={'warning' && errors.releaseDate} onChange={handleChange} value={inputs.releaseDate} name='releaseDate' type='text' placeholder='00/00/0000' />
                </label>
                <p className='danger'>{errors.releaseDate}</p>
                <label> Rate your videogame:
                    <input className={'warning' && errors.rating} onChange={handleChange} value={inputs.rating} name='rating' type='number' />
                </label>
                <p className='danger'>{errors.rating}</p>
            </fieldset>

            <fieldset>
                <label>Enter Videogame Image:
                    <input className={'warning' && errors.image} onChange={handleChange} value={inputs.image} name="image" type="text" placeholder='http://yourpage.com/image' />
                </label>
                <p className='danger'>{errors.image}</p>
                <label>Enter a description:
                    <textarea className={'warning' && errors.description} onChange={handleChange} value={inputs.description} name="description"
                        type="text" rows="3" cols="30" placeholder="I like this videogame because..."></textarea>
                </label>
                <p className='danger'>{errors.description}</p>
            </fieldset>

            <fieldset>
                <label> Choose a platform:
                    <select className={'warning' && errors.platforms} onChange={handleChange} multiple value={inputs.platforms} name='platforms'>
                        {availablePlatforms.map((platform, index) => (
                            <option key={index} value={platform} >
                                {platform}
                            </option>
                        ))}
                    </select>
                </label>
                <p className='danger'>{errors.platforms}</p>
                <div className="form-labels">
                    {inputs.platforms.join(' | ')}
                </div>

                <label> Choose genres:
                    <select className={'warning' && errors.genres} onChange={handleChange} multiple value={inputs.genres} name='genres' >
                        {availableGenres.map((genre, index) => (
                            <option key={index} value={genre} >
                                {genre}
                            </option>
                        ))}
                    </select>
                </label>
                <p className='danger'>{errors.genres}</p>
                <div className="form-labels" >
                    {inputs.genres.join(' | ')}
                </div>
            </fieldset>

            {/* <input disabled={disable()} type="submit"/> */ }
             <button className="btn" type='submit'>Add videogame</button>
        </form>
    )
};

export default Form;
