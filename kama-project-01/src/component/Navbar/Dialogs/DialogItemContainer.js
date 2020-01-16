import React from 'react';
import DialogItem from './Dialog-item';

const DialogItemContainer = (props) => {

		let newDialog = props.dialogData.map( (d,index) => 
		<DialogItem	name={d.name} 
								id={d.id} 
								key={index}/> )
	
	return (
		<div className="dialog-list list-group col-3 border-right">
				{newDialog}
		</div>
	) 

}

export default DialogItemContainer;
