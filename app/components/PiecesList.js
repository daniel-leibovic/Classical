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
	  	var href = "/#/".concat(this.props.params.composer).concat("/").concat(this.props.params.compositionType).concat("/Symphony 1")
		return(
			<div className="container" style={ styles.main }>
		      <ListGroup>
			    <ListGroupItem href={ href }>Symphony 1</ListGroupItem>
			    <ListGroupItem href={ href }>Symphony 2</ListGroupItem>
			    <ListGroupItem href={ href }>Symphony 3</ListGroupItem>
			    <ListGroupItem href={ href }>Symphony 4</ListGroupItem>
			    <ListGroupItem href={ href }>Symphony 5</ListGroupItem>
			    <ListGroupItem href={ href }>Symphony 6</ListGroupItem>
			    
			  </ListGroup>
		      
		    </div>
		)
	}
}

export default PiecesList;