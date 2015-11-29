import React from 'react';

class ComposerTile extends React.Component {

	render() {
	  	var classes = {
	  		column: 'col-sm-1 col-md-4'
	  	}
	  	var temp = "/#/";
	  	var href = temp.concat(this.props.composer)
		return (
			<div className={ classes.column } style={ this.props.colStyle }>
	  			<h2>{ this.props.composer }</h2>
	  			<div style={ this.props.descriptionStyle }>
	  				<p>
	  				{ this.props.text }
	  				</p>
	  			</div>
	  			<p><a href={href} className="btn btn-success">Listen</a></p>
	  		</div>
		)
	}
}

export default ComposerTile;