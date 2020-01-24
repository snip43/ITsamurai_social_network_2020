import React from 'react';
// import Preloader from '../../../Preloader'

import './profileInfo.css';
import MeStatusWithHooks from '../../../MeStatus/meStatusWithHooks';


const ProfileInfo = (props) => {

	// if(!props.large || !props.name) {
	// 	return <Preloader />
	// }
const isLook = () =>  props.isLookingForJob ? 'Ищу' : 'Не ищу' 
	


	return (

				<div className='profile d-flex my-3'>
						<div className='col-4 pl-0 mr-4'>
							<img src={props.large} alt="foto" className='profile__foto'/>
						</div>
						<div className='profile__info d-flex flex-column text-left pt-3'>
							<h4 className='mb-1'>{props.name}</h4>

							<MeStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/>
							
							<p className='mt-5'><b>В поисках работы: </b>{isLook()}</p>
							<p><b>Примечания по поиску работы: </b>{props.lookingForJobDescription}</p>
							<p><b>Обо мне: </b>{props.aboutMe}</p>
							<p><b>Мои контакты: </b>{props.contacts}</p>
							
						</div>
					</div>
		
	)
}

export default ProfileInfo;