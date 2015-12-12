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
	  	var data = [
	  		{performer: "Berlin Philharmonic"},
	  		{performer: "NY Philharmonic"},
	  		{performer: "Chicago Symphony Orchestra"}
	  	];
	  	var count = 0;
	  	var recordings = data.map(function(recording) {
	  		return (
	  			<Recording 	performer={recording.performer}
	  						params={this.props.params}
	  						key={count++} />
	  		)
	  	}, this)

		return(
			<div className="container" style={ styles.main }>
		     	<h1>{this.props.params.composer} {this.props.params.composition}</h1>
		     	<ListGroup>
		     		{recordings}
				</ListGroup>
		      
		    </div>
		)
	}
}

class Recording extends React.Component {
	render () {
		var href = "/#/".concat(this.props.params.composer)
	  					.concat("/")
	  					.concat(this.props.params.compositionType)
	  					.concat("/")
	  					.concat(this.props.params.composition)
	  					.concat("/")
	  					.concat(this.props.performer)
		return (
			<div className="recording">
			    <ListGroupItem href={ href }>{this.props.performer}</ListGroupItem>
			</div>
		)
	}
}

export default RecordingList;