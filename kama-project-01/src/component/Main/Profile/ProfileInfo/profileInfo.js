import React from 'react';
import Preloader from '../../../Preloader';
import userPhoto from '../../../../assets/images/photoDefault.jpg'

import './profileInfo.css';
import MeStatusWithHooks from '../../../MeStatus/meStatusWithHooks';


const ProfileInfo = (props) => {

	if(!props.name) {
		return <Preloader />
	}

const isLook = () =>  props.isLookingForAJob ? 'Ищу' : 'Не ищу' 

const onPictureSelected = (e) => {
	if(e.target.files.length) {
		props.savePhoto(e.target.files[0])
	}
	console.log(e.target.files.length)
}

	
	return (

				<div className='profile d-flex my-3'>
						<div className='col-4 pl-0 mr-4'>
							<img src={props.large || userPhoto} alt="foto" className='profile__foto'/>
							<div className='btn btn-sm'>
								{props.isOwner && <input type={'file'} onChange={onPictureSelected} className={'w-50'}/> }
							</div>
						</div>
						
						<div className='profile__info d-flex flex-column text-left pt-3'>
							<h4 className='mb-1'>{props.name}</h4>

							<MeStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/>
							
							<p className='mt-5'><b>В поисках работы: </b>{isLook()}</p>
							<p><b>Примечания по поиску работы: </b>{props.lookingForAJobDescription}</p>
							<p><b>Обо мне: </b>{props.aboutMe}</p>
							<p><b>Мои контакты: </b>{props.contacts}</p>
							
						</div>
					</div>
		
	)
}

export default ProfileInfo;