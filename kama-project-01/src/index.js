import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './component/App';
import './index.css';
import store from './redux/redux-store';
import {Provider} from 'react-redux';

	ReactDOM.render(
		<Router >
				<Provider store={store}>
					<App />
				</Provider>

		</Router>	, document.getElementById('root'));






