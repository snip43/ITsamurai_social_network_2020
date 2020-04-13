import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer'; 
import findUsersReducer from './findUsers-reducer';
import authLoginReducer from './auth_login-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';

let rootReducer = combineReducers({
	profilePage: profileReducer, 
	dialogsPage: dialogsReducer, 
	navbarPage: navbarReducer,
	findUsersPage: findUsersReducer,
	authLogin: authLoginReducer,
	form: formReducer,
	app: appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = store
// export default store;
