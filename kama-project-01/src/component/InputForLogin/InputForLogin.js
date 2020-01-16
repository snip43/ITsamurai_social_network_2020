import React from 'react';
import styles from './InputForLogin.module.css'

export const InputForLogin = ({input,label,placeholder,type,meta: { touched, error, warning } }) => {

	return (
		<div className={styles.formControl}>
			<label>{label}</label>
			<div className=''>
				<input {...input} placeholder={placeholder} type={type} />
				{touched &&
        ((error && <span className={styles.error}>*{error}</span>) ||
          (warning && <span>{warning}</span>))}
			</div>
			
		</div>	
	)
}

