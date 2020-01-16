import React from 'react';
import { Field } from 'redux-form'


export const createField = (name,label,placeholder,component,validators,type,props={},text='') => <div>
	<Field 	
							name={name} 
							label = {label}
							placeholder= {placeholder} 
							component={component} 
							validate ={validators}
							type= {type}
							{...props} />  {text}
	</div>

