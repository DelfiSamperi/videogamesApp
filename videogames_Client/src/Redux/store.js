import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
//import  { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 


const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;