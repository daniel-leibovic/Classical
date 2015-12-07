import React from 'react';

class CompositionType extends React.Component {

	render() {
	  	var classes = {
	  		column: 'col-sm-6 col-md-4'
	  	}
	  	var styles = {
	  		main: {
	  			border: '1px solid black',
	  			textAlign: 'center',
	  			lineHeight: '100px',
	  			height: '100px'
	  		}
	  	}
	  	var href = "/#/".concat(this.props.composer).concat("/").concat(this.props.name)
		return (
			<div className={ classes.column } style = {styles.main}>
	  			<p><a href={href} className="btn btn-success">{this.props.name}</a></p>
	  		</div>
		)
	}
}

export default CompositionType;