# videogamesApp

A fullstack web application  developed as an individual project.
The app allows users to search videogames from an external API, create custom videogames, filter results, and save favorites.

## Features

* Search videogames from both external API and local database
* Create and store new videogames
* Filter and order videogames
* Save favorite videogames
* View videogame details

## Technologies used for development

* Node.js & Express.js
* PostgreSQL & Sequelize ORM
* Git & GitHub
* React & Redux Toolkit 
* Plain CSS

## Project Structure

 The project is divided into two main parts:

### Client
The frontend application built with React and Redux Toolkit.
Handles user interface, global state management, filters, and requests to the backend API.

### Server
REST API developed with Express.js and Sequelize
Responsible for handling API routes, connecting to the database and interacting with the external videogame API.

### Database

PostgreSQL database managed with Sequelize ORM
Main models: Videogames and Genres (many-to-many relationship)

### API Endpoints
GET /videogames
Returns all videogames from the API and database

GET /videogames/:id
Returns detailed information about a videogame by ID

POST /videogames
Creates a new videogame in the database

GET /genres
Returns all available genres
Genres are fetched from the external API and stored in the database when the server starts 

### Notes
This project was developed for learning purposes and to practice fullstack development with React, Express, PostgreSQL and Sequelize.



