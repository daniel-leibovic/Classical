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
	  		Mozart: "Franz Peter Schubert (German pronunciation: [ˈfʁant͡s ˈʃuːbɐt]; 31 January 1797 – 19 November 1828) was an Austrian composer. Schubert died at 31 but was extremely prolific during his lifetime. His output consists of over six hundred secular vocal works (mainly Lieder), seven complete symphonies, sacred music, operas, incidental music and a large body of chamber and piano music. Appreciation of his music while he was alive was limited to a relatively small circle of admirers in Vienna, but interest in his work increased significantly in the decades following his death. Felix Mendelssohn, Robert Schumann, Franz Liszt, Johannes Brahms and other 19th-century composers discovered and championed his works. Today, Schubert is ranked among the greatest composers of the late Classical era and early Romantic era and is one of the most frequently performed composers of the early nineteenth century.",
	  		Beethoven: "Franz Peter Schubert (German pronunciation: [ˈfʁant͡s ˈʃuːbɐt]; 31 January 1797 – 19 November 1828) was an Austrian composer. Schubert died at 31 but was extremely prolific during his lifetime. His output consists of over six hundred secular vocal works (mainly Lieder), seven complete symphonies, sacred music, operas, incidental music and a large body of chamber and piano music. Appreciation of his music while he was alive was limited to a relatively small circle of admirers in Vienna, but interest in his work increased significantly in the decades following his death. Felix Mendelssohn, Robert Schumann, Franz Liszt, Johannes Brahms and other 19th-century composers discovered and championed his works. Today, Schubert is ranked among the greatest composers of the late Classical era and early Romantic era and is one of the most frequently performed composers of the early nineteenth century.",
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