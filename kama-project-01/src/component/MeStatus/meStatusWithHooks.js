import React,{useState,useEffect} from 'react'

const MeStatusWithHook = (props) =>  {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(
		() => {
		setStatus(props.status);
	},[props.status]);

	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateProfileStatus(status);
	}
	
	const onChangeStatus = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
		<div>
			{ editMode &&
				<div>
					<input
						type='text' 
						autoFocus={true} 
						onBlur = {deactivateEditMode}
						onChange={onChangeStatus}
						value={status} />
				</div>
			}
			{	!editMode &&
				<div>
					<p onDoubleClick={activateEditMode} > {status || '------' }</p>
				</div>
			}
		</div>
)
}

		
export default MeStatusWithHook; 