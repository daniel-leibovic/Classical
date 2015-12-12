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
	  		{URL: "4b0u2Q0qzmc98O9TSsWiQ9"},
	  		{URL: "7p6ocvsxC2IZpFmP2EJrA2"},
	  		{URL: "268YzbymM01WLTu86qOECq"},
	  		{URL: "0NemBSBw54olsRuZx1GANZ"},
	  		{URL: "6OJZkSj1dozSzXAFslYGQi"}
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
				<h1>{this.props.params.composer} {this.props.params.composition} by {this.props.params.recording} </h1>
				<div className="tracks">
			    	{tracks}
			    </div>
			    <div className="album">
			    	<h1>ALBUM:</h1>
				    <iframe src="https://embed.spotify.com/?uri=spotify:album:5kIIc3angUHXtDvh5Uw4au" width="640" height="720" frameborder="0" allowtransparency="true"></iframe>
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