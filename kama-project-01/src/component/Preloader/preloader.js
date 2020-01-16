import React from 'react';

import './preloader.css'


const Preloader = ()=> {

	return (
	<div className="lds-css ng-scope d-flex justify-content-center">
		<div className="lds-pacman">
			<div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
	)
}

export default Preloader;