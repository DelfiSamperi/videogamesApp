// Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden 
// utilizar validaciones HTML, ni utilizar librerías especiales para esto.

import React, { useState } from "react";
import './form.css';

//verificacion errores
const validate = (inputs) => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/ ;
    const urlRegex = /^https?:\/\/[^\s$.?#].[^\s]*$/ ;
    var errors = {};
    
    if (!inputs.name) errors.name = 'Se requiere un nombre';
    if (inputs.rating < 1 && inputs.rating > 10) errors.rating = 'El puntaje debe ser entre 1 y 10';
    if (!inputs.releaseDate) errors.releaseDate = 'Se requiere una fecha de lanzamiento';
    if(!dateRegex.test(inputs.releaseDate)) errors.releaseDate = 'El formato de fecha debe ser 00/00/0000';
    if (!inputs.plataforms) errors.plataforms = 'Se requiere al menos una plataforma';
    if (!inputs.description) errors.description = 'Se requiere una descripcion';
    if(inputs.description.length > 200) errors.description = 'La descripcion no puede superar los 200 caracteres';
    if (!inputs.imagen) errors.imagen = 'Se requiere una imagen';
    if(!urlRegex.test(inputs.image)) errors.image = 'La url de la imagen no es válida';
    if (!inputs.generos) errors.generos = 'Se requiere al menos un genero';

    return errors;
};

const Form = () => {
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
    const availablePlatforms = ["PC", "PlayStation", "Xbox", "Nintendo Switch"];
    const availableGenres = ["Acción", "Aventura", "RPG", "Deportes"];

    //manejo cambio de inputs
    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        })
        setErrors(
            validate({
                ...inputs,
                [event.target.name] : event.target.value,
            })
        )
    };

    //manejo seleccion multiple (platforms, genres)
    //NO ANDA BIEN
    const handleSelect = (event) => {
        const {name, options} = event.target;
        const selectedOptions = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);

        console.log(selectedOptions);
        
        setInputs({
            ...inputs,
            [name]: selectedOptions,
        })
    };

    const disable = () => {
        let disabled = true;
        for(let error in errors) {
            errors[error]==='' ?
             disabled = false :
             disabled = true;
            break;
            };
    };

    //envio de formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hace como que se envió el form', inputs)
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h3>Add a new Videogame:</h3>
            <fieldset>
                <label>Enter Videogame Name:
                    <input className={'warning' && errors.name} onChange={handleChange} value={inputs.name} name="name" type="text" placeholder='your new videogame'/>
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
                    <select className={'warning' && errors.platforms} onChange={handleSelect} multiple value={inputs.platforms} name='platforms'>
                        {availablePlatforms.map((platform, index) => (
                            <option key={index} value={platform} >
                                {platform}
                            </option>
                        ))}
                    </select>
                </label>
                <p className='danger'>{errors.platforms}</p>

                <label> Choose genres:
                    <select className={'warning' && errors.genres} onChange={handleSelect} multiple value={inputs.genres} name='genres' >
                        {availableGenres.map((genre, index) => (
                            <option key={index} value={genre} >
                                {genre}
                            </option>
                        ))}
                    </select>
                </label>
                <p className='danger'>{errors.genres}</p>
            </fieldset>

            <button className="btn" type='submit' disabled={disable()} >Add videogame</button>
        </form>
    )
};

export default Form;
