let initinalState = {
	friendsData: [
		{name:'Орех', id:'yana', avatar: 'https://pbs.twimg.com/media/DfcRcaNXUAAfkJa.jpg:large'},
		{name:'Халва', id:'mom', avatar:'https://avatars.mds.yandex.net/get-pdb/1883246/ba2d2612-d18c-4274-a3d9-054b4a9129ce/s1200?webp=false'},
		{name:'Банан', id:'dady',avatar: 'https://avatars.mds.yandex.net/get-pdb/1209663/8956145b-908b-4a7e-a9fb-7c4e0c769289/s1200'},
		{name:'Мелочь', id:'sister',avatar:'https://static.wallpapers-anime.com/upload/20170524/581/B/A/p/BApFEF.jpg'},
		{name:'Димон', id:'dimon',avatar:'https://avatars.mds.yandex.net/get-pdb/1668445/2e27748d-4294-450d-9500-ee2f2b2b3428/s1200?webp=false'}
	]
}

const navbarReducer = (state = initinalState,action) => {
	return state;
}

export default navbarReducer;