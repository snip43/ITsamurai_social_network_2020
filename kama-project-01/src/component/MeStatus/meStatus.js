import React, { Component } from 'react'

class MeStatus extends Component {

	state ={
		editMode:false,
		status: this.props.status
	}


	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateProfileStatus(this.state.status);
	}

	onChangeStatus = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}


	componentDidUpdate(prevProps,prevState){
		if(prevProps.status !== this.props.status){
			this.setState({
				status: this.props.status
			})
		}
	}

	render(){
		const {editMode} = this.state;
	return (
		<div>
			{editMode && 
				<div>
					<input
						type='text' 
						autoFocus={true} 
						value={this.state.status}
						onBlur={this.deactivateEditMode} 
						onChange={this.onChangeStatus} />
				</div>
			}
			{ !editMode && 
				<div>
					<p onDoubleClick={ this.activateEditMode}> {this.props.status || '------' }</p>
				</div>
			}
		</div>
)
}
}
		
export default MeStatus; 