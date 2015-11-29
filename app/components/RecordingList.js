import React from 'react';
import ComposerTile from './ComposerTile';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class RecordingList extends React.Component {
	render() {
	  	var styles = {
	  		main: {
	  			paddingTop: '70px',
	  		},
	  	}

		return(
			<div className="container" style={ styles.main }>
		      <ListGroup>
			    <ListGroupItem >Berlin Philharmonic</ListGroupItem>
			    <ListGroupItem >Chicago Symphony Orchestra</ListGroupItem>
			    <ListGroupItem >New York Philharmonic</ListGroupItem>
			  </ListGroup>
		      
		    </div>
		)
	}
}

export default RecordingList;