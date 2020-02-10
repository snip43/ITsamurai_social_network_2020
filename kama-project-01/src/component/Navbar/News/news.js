import React, { Component } from 'react';
import style from './news.module.css';


export default class News extends Component {

state = {
	counter: 0
}

incChange = () => {
	this.setState((state)=>{
		return {
			counter: state.counter+1
		}
	})
}

decChange = () =>{
	this.setState((state)=>{
		return {
			counter: state.counter-1
	}
})
}

resetCount = () => {
	this.setState(()=> {
		return {
			counter: 0
		}
	})
}

render(){

	const {counter} = this.state;

	return (
		<div className={style.wrapper}>
				<h3>Пока здесь просто счетчик </h3>
				<h1>{counter}</h1>
				<div className={style.btnList}>
					<button className={style.incr} onClick={this.incChange}>Прибавить</button>
					<button className={style.reset} onClick={this.resetCount}>Сбросить</button>
					<button className={style.decr} onClick={this.decChange}>Убавить</button>
				</div>
		</div>
	)
}
}