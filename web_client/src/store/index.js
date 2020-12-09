import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import commands from '../slices/commandsSlice'
import auth from '../slices/authSlice'
import error from '../slices/errorSlice'

const reducers = combineReducers({commands, auth, error})

export default createStore(reducers, applyMiddleware(thunk))

// https://github.com/zalmoxisus/redux-devtools-extension

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)))