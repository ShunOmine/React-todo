import React from "react";

export default class Form extends React.Component{
	render(){
		return(
			<form className="siimple-form" onSubmit={this.props.handleAdd}>
				<div className="siimple-form-field">
					<label className="siimple-label siimple--color-white">Your todo:</label>
					<input name="title" type="text" className="siimple-input"/>
					<input type="submit" value="Add" className="siimple-btn siimple-bnt--teal"/>
				</div>
			</form>
		);
	}
}