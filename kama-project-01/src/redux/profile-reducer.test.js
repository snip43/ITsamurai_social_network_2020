import profileReducer,{addPostOnReduxForm} from "./profile-reducer";
import React from 'react';
import ReactDOM from 'react-dom'

let state = {
	postsData:[
		{id:1, value:'Первое',likeCount:20},
		{id:2, value:'Двадцать пятое', likeCount:1}
	]};

it('new post should be added', ()=> {
	let action  = addPostOnReduxForm('hello test');
	let newState = profileReducer(state,action);
	expect(newState.postsData.length).toBe(3) ;
});

it('value should be hello test', ()=> {
	let action  = addPostOnReduxForm('hello test');
	let newState = profileReducer(state,action);
	expect(newState.postsData[2].value).toBe('hello test') ;
});

