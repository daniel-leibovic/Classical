import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Main extends React.Component{
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
  	var classes = {
  		column: 'col-sm-1 col-md-4'
  	}
    return(
		<div>
		<nav id="mainNav" className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
		    <div className="container">
		        <div className="navbar-header">
		            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
		                <span className="sr-only">Toggle navigation</span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		            </button>
		            <a className="navbar-brand" href="#">Tutorial Republic</a>
		        </div>
		        <div className="collapse navbar-collapse" id="navbarCollapse">
		            <ul className="nav navbar-nav">
		                <li className="active"><a href="http://www.tutorialrepublic.com" target="_blank">Home</a></li>
		                <li><a href="http://www.tutorialrepublic.com/about-us.php" target="_blank">About</a></li>
		                <li><a href="http://www.tutorialrepublic.com/contact-us.php" target="_blank">Contact</a></li>
		            </ul>
		        </div>
		    </div>
		</nav>
		<div className="container" style={ styles.main }>
	      	<div className="row" style={ styles.row }>
	      		<div className={ classes.column } style={ Object.assign(styles.red, styles.column) }>
	      			<h2>Bach</h2>
	      			<div style={ styles.description }>
	      				<p>
	      				Franz Peter Schubert (German pronunciation: [ˈfʁant͡s ˈʃuːbɐt]; 31 January 1797 – 19 November 1828) was an Austrian composer. Schubert died at 31 but was extremely prolific during his lifetime. His output consists of over six hundred secular vocal works (mainly Lieder), seven complete symphonies, sacred music, operas, incidental music and a large body of chamber and piano music. Appreciation of his music while he was alive was limited to a relatively small circle of admirers in Vienna, but interest in his work increased significantly in the decades following his death. Felix Mendelssohn, Robert Schumann, Franz Liszt, Johannes Brahms and other 19th-century composers discovered and championed his works. Today, Schubert is ranked among the greatest composers of the late Classical era and early Romantic era and is one of the most frequently performed composers of the early nineteenth century.
	      				</p>
	      			</div>
	      			<p><a href="https://en.wikipedia.org/wiki/Johann_Sebastian_Bach" target="_blank" className="btn btn-success">Listen</a></p>
	      		</div>
	      		<div className={ classes.column } style={ Object.assign(styles.blue, styles.column) }>
	      			<h2>Haydn</h2>
	      			<div style={ styles.description }>
	      				<p>
	      				Franz Peter Schubert (German pronunciation: [ˈfʁant͡s ˈʃuːbɐt]; 31 January 1797 – 19 November 1828) was an Austrian composer. Schubert died at 31 but was extremely prolific during his lifetime. His output consists of over six hundred secular vocal works (mainly Lieder), seven complete symphonies, sacred music, operas, incidental music and a large body of chamber and piano music. Appreciation of his music while he was alive was limited to a relatively small circle of admirers in Vienna, but interest in his work increased significantly in the decades following his death. Felix Mendelssohn, Robert Schumann, Franz Liszt, Johannes Brahms and other 19th-century composers discovered and championed his works. Today, Schubert is ranked among the greatest composers of the late Classical era and early Romantic era and is one of the most frequently performed composers of the early nineteenth century.
	      				</p>
	      			</div>
	      			<p><a href="https://en.wikipedia.org/wiki/Joseph_Haydn" target="_blank" className="btn btn-success">Listen</a></p>
	      		</div>
	      		<div className={ classes.column } style={ Object.assign(styles.red, styles.column)}>
	      			<h2>Mozart</h2>
	      			<div style={ styles.description }>
	      				<p>
	      				Franz Peter Schubert (German pronunciation: [ˈfʁant͡s ˈʃuːbɐt]; 31 January 1797 – 19 November 1828) was an Austrian composer. Schubert died at 31 but was extremely prolific during his lifetime. His output consists of over six hundred secular vocal works (mainly Lieder), seven complete symphonies, sacred music, operas, incidental music and a large body of chamber and piano music. Appreciation of his music while he was alive was limited to a relatively small circle of admirers in Vienna, but interest in his work increased significantly in the decades following his death. Felix Mendelssohn, Robert Schumann, Franz Liszt, Johannes Brahms and other 19th-century composers discovered and championed his works. Today, Schubert is ranked among the greatest composers of the late Classical era and early Romantic era and is one of the most frequently performed composers of the early nineteenth century.
	      				</p>
	      			</div>
	      			<p><a href="https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart" target="_blank" className="btn btn-success">Listen</a></p>
	      		</div>
  		        <div className="clearfix visible-md-block"></div>
  		        <div className="clearfix visible-lg-block"></div>
	      		<div className={ classes.column } style={ Object.assign(styles.blue, styles.column) }>
	      			<h2>Beethoven</h2>
	      			<div style={ styles.description }>
	      				<p>
	      				Franz Peter Schubert (German pronunciation: [ˈfʁant͡s ˈʃuːbɐt]; 31 January 1797 – 19 November 1828) was an Austrian composer. Schubert died at 31 but was extremely prolific during his lifetime. His output consists of over six hundred secular vocal works (mainly Lieder), seven complete symphonies, sacred music, operas, incidental music and a large body of chamber and piano music. Appreciation of his music while he was alive was limited to a relatively small circle of admirers in Vienna, but interest in his work increased significantly in the decades following his death. Felix Mendelssohn, Robert Schumann, Franz Liszt, Johannes Brahms and other 19th-century composers discovered and championed his works. Today, Schubert is ranked among the greatest composers of the late Classical era and early Romantic era and is one of the most frequently performed composers of the early nineteenth century.
	      				</p>
	      			</div>
	      			<p><a href="https://en.wikipedia.org/wiki/Ludwig_van_Beethoven" target="_blank" className="btn btn-success">Listen</a></p>
	      		</div>
	      		<div className={ classes.column } style={ Object.assign(styles.red, styles.column) }>
	      			<h2>Schubert</h2>
	      			<div style={ styles.description }>
	      				<p>
	      				Franz Peter Schubert (German pronunciation: [ˈfʁant͡s ˈʃuːbɐt]; 31 January 1797 – 19 November 1828) was an Austrian composer. Schubert died at 31 but was extremely prolific during his lifetime. His output consists of over six hundred secular vocal works (mainly Lieder), seven complete symphonies, sacred music, operas, incidental music and a large body of chamber and piano music. Appreciation of his music while he was alive was limited to a relatively small circle of admirers in Vienna, but interest in his work increased significantly in the decades following his death. Felix Mendelssohn, Robert Schumann, Franz Liszt, Johannes Brahms and other 19th-century composers discovered and championed his works. Today, Schubert is ranked among the greatest composers of the late Classical era and early Romantic era and is one of the most frequently performed composers of the early nineteenth century.
	      				</p>
	      			</div>
	      			<p><a href="https://en.wikipedia.org/wiki/Franz_Schubert" target="_blank" className="btn btn-success">Listen</a></p>
	      		</div>
	      		<div className={ classes.column } style={ Object.assign(styles.blue, styles.column) }>
	      			<h2>Chopin</h2>
	      			<div style={ styles.description }>
	      				<p>
	      				Franz Peter Schubert (German pronunciation: [ˈfʁant͡s ˈʃuːbɐt]; 31 January 1797 – 19 November 1828) was an Austrian composer. Schubert died at 31 but was extremely prolific during his lifetime. His output consists of over six hundred secular vocal works (mainly Lieder), seven complete symphonies, sacred music, operas, incidental music and a large body of chamber and piano music. Appreciation of his music while he was alive was limited to a relatively small circle of admirers in Vienna, but interest in his work increased significantly in the decades following his death. Felix Mendelssohn, Robert Schumann, Franz Liszt, Johannes Brahms and other 19th-century composers discovered and championed his works. Today, Schubert is ranked among the greatest composers of the late Classical era and early Romantic era and is one of the most frequently performed composers of the early nineteenth century.
	      				</p>
	      			</div>
	      			<p><a href="https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin" target="_blank" className="btn btn-success">Listen</a></p>
	      		</div>
	      	</div>
	      	<hr/>
	      	<div className="row">
	      		<div className="col-sm-12">
	      			<footer>
      					<p>© Copyright 2015 Classical</p>
	      			</footer>
	      		</div>
	      	</div>
      	</div>
      	</div>
      
    )
  }
}

export default Main;

