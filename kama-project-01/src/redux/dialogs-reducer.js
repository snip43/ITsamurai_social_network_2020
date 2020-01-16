const ADD_MESSAGE = 'ADD_MESSAGE';

let initinalState = {
	dialogData: [
			{name:'Яна', id:'yana', avatar: 'https://pbs.twimg.com/media/DfcRcaNXUAAfkJa.jpg:large'},
			{name:'Мама', id:'mom', avatar:'https://avatars.mds.yandex.net/get-pdb/1883246/ba2d2612-d18c-4274-a3d9-054b4a9129ce/s1200?webp=false'},
			{name:'Папа', id:'dady',avatar: 'https://avatars.mds.yandex.net/get-pdb/1209663/8956145b-908b-4a7e-a9fb-7c4e0c769289/s1200'},
			{name:'Мелочь', id:'sister',avatar:'https://static.wallpapers-anime.com/upload/20170524/581/B/A/p/BApFEF.jpg'},
			{name:'Димон', id:'dimon',avatar:'https://avatars.mds.yandex.net/get-pdb/1668445/2e27748d-4294-450d-9500-ee2f2b2b3428/s1200?webp=false'}
		],	
		messageData:[
			{id:1, message: 'Жду! Борщ готов!'},
			{id:2, message: 'Привет,сынуля! Работаешь?'},
			{id:3, message: 'У меня отпуск в октябре,хочу приехать!'},
		]
	}


const dialogsReducer = (state = initinalState,action) => {
	switch(action.type) {
		case ADD_MESSAGE: 
				let textMessage = action.newMessageText;
				let newMessage = {
					id:4,
					message: textMessage,
				};

					return {
							...state,
							messageData: [...state.messageData, newMessage],
					}
		default:
			return state;
	}
}

export const addMessageText = (newMessageText) => ({ type: ADD_MESSAGE,newMessageText });


export default dialogsReducer;