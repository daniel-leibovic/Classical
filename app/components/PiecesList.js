import React from 'react';
import ComposerTile from './ComposerTile';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class PiecesList extends React.Component {
	render() {
	  	var styles = {
	  		main: {
	  			paddingTop: '70px',
	  		},
	  	}
	  	//GET LIST OF PIECES
	  	//COMPOSER, TYPE
	  	var data = [
	  		{pieceName: "Symphony 1"},
	  		{pieceName: "Symphony 2"},
	  		{pieceName: "Symphony 3"},
	  		{pieceName: "Symphony 4"},
	  		{pieceName: "Symphony 5"},
	  		{pieceName: "Symphony 6"},
	  		{pieceName: "Symphony 7"},
	  		{pieceName: "Symphony 8"},
	  		{pieceName: "Symphony 9"}
	  	];

  		var count = 0;
	  	var pieces = data.map(function(piece) {
	  		return (
	  			<Piece 	pieceName={piece.pieceName}
	  					params={this.props.params}
	  					key={count++} />
	  		)
	  	}, this)
		return(
			<div className="container" style={ styles.main }>
		      	<h1>{this.props.params.composer} {this.props.params.compositionType} </h1>
		      	<ListGroup>
			      	{pieces}
			    </ListGroup>
		    </div>
		)
	}
}


class Piece extends React.Component {
	render() {
	  	var href = "/#/".concat(this.props.params.composer)
	  					.concat("/")
	  					.concat(this.props.params.compositionType)
	  					.concat("/")
	  					.concat(this.props.pieceName)
		return (
			<div className="piece">
			    <ListGroupItem href={ href }>{this.props.pieceName}</ListGroupItem>
			</div>
		);
	}
}

export default PiecesList;