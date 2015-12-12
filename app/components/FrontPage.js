import React from 'react';
import ComposerTile from './ComposerTile';
import { Grid, Row, Col } from 'react-bootstrap';


class FrontPage extends React.Component {
	render() {
	  	var styles = {
	  		red: {
	  			background: 'rgba(255, 25, 25, .25)',
	  		},
	  		blue: {
	  			background: 'rgba(140, 25, 25, .25)',
	  		},
	  		main: {
	  			paddingTop: '70px',
	  		},
	  		row: {
	  			
	  		},
	  		column: {
	  			height: '250px',
	  		},
	  		description: {
	  			height: '100px',
	  			textOverflow: 'ellipsis',
	  			overflow: 'hidden',
	  			display: '-webkit-box',
	  			WebkitLineClamp: '5',
	  			WebkitBoxOrient: 'vertical',
	  		},
	  	}
	  	var texts = {
	  		Mozart: "Wolfgang Amadeus Mozart was not only one of the greatest composers of the Classical period, but one of the greatest of all time. Surprisingly, he is not identified with radical formal or harmonic innovations, or with the profound kind of symbolism heard in some of Bach's works. Mozart's best music has a natural flow and irresistible charm, and can express humor, joy or sorrow with both conviction and mastery. His operas, especially his later efforts, are brilliant examples of high art, as are many of his piano concertos and later symphonies. Even his lesser compositions and juvenile works feature much attractive and often masterful music.",
	  		Beethoven: "Ludwig van Beethoven was a German composer and pianist. A crucial figure in the transition between the Classical and Romantic eras in Western art music, he remains one of the most famous and influential of all composers.",
	  	}
	  	var hrefs = {
	  		Mozart: "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
	  		Beethoven: "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
	  	}
		return(
			<div className="container" style={ styles.main }>
		      	<div className="row" style={ styles.row }>
		      		<ComposerTile 
		      			colStyle={ Object.assign(styles.red, styles.column) }
		      			composer={ "Mozart" }
		      			descriptionStyle={ styles.description }
		      			text={ texts.Mozart }
		      			href={ hrefs.Mozart } />
		      		<ComposerTile 
		      			colStyle={ Object.assign(styles.blue, styles.column) }
		      			composer={ "Beethoven" }
		      			descriptionStyle={ styles.description }
		      			text={ texts.Beethoven }
		      			href={ hrefs.Beethoven } />
		      	</div>
		    </div>
		)
	}
}

export default FrontPage;