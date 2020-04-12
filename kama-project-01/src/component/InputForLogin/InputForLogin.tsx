import React, {FC} from 'react';
import styles from './InputForLogin.module.css'

type MetaType = {
	touched:string
	error: string
	warning: string
}

type PropsType = {
	input: string
	label: string
	placeholder: string
	type: string
	meta: MetaType
}

const InputForLogin: FC<PropsType> = ({input,label,placeholder,type,meta: { touched, error, warning } }) => {

	return <div className={styles.formControl}>
			<label>{label}</label>
			<div className=''>
				<input {...input} placeholder={placeholder} type={type} />
				{touched &&
        ((error && <span className={styles.error}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
			</div>
		</div>	
	
}

export default InputForLogin;