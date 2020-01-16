import React,{Component} from 'react';

import Header from '../Header/header';
import Main from '../Main/';
import Footer from '../Footer/footer';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {initApp} from '../../redux/app-reducer';
import {withRouter} from 'react-router-dom'
// import Preloader from '../Preloader'

import './app.css';

class  App extends Component {

	componentDidMount(){
		this.props.initApp();
	}

	render () {
		return  <div className="App"> 
				<Header />
				<Main />
				<Footer />
	</div>
	}
} 

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

const mapDispatchToProps = {
	initApp
}


export default compose(
	withRouter,
	connect(mapStateToProps,mapDispatchToProps)
)(App)

