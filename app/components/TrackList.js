import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class TrackList extends React.Component {
	render() {
	  	var styles = {
	  		main: {
	  			paddingTop: '70px',
	  		},
	  		album: {
	  			float: 'right'
	  		},
	  		tracks: {
	  			width: '600px'
	  		}
	  	}
	  	var data = [
	  		{URL: "72R8TpLB7bReDrr29vD39h"},
	  		{URL: "0RK5JNTueTTyTTL6iMmyjj"},
	  		{URL: "66xhCGhFAiUh50S6LjRvcs"},
	  		{URL: "66xhCGhFAiUh50S6LjRvcs"},
	  	];

  		var count = 0;
	  	var tracks = data.map(function(track) {
	  		return (
	  			<Track 	URL={track.URL}
	  					params={this.props.params}
	  					key={count++} />
	  		)
	  	}, this)
		return(
			<div className="container" style={ styles.main }>
				<div className="tracks">
			    	{tracks}
			    </div>
			    <div className="album">
			    	<h1>ALBUM:</h1>
				    <iframe src="https://embed.spotify.com/?uri=spotify:album:2YVtVvALIC487bj4UGGxpQ" width="640" height="720" frameborder="0" allowtransparency="true"></iframe>
			    </div>
		    </div>
		)
	}
}


class Track extends React.Component {
	render() {
		var src = "https://embed.spotify.com/?uri=spotify:track:"
					.concat(this.props.URL)
		return (
	    	<iframe src={src}
	    			width="640"
	    			height="80"
	    			frameBorder="0"
	    			allowTransparency="true">
	    	</iframe>
		);
	}
}

export default TrackList;