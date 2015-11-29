import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FrontPage from './FrontPage';

class Main extends React.Component{
  render() {
    console.log('got here!');
  	console.log("this.props.children:", this.props.children);
    console.log("this.props.params:", this.props.params)
    var content = this.props.children ? this.props.children : <FrontPage />
    return(
		<div>
			<Navbar />
        {content}
	      	<hr/>
	      	<Footer />
  	</div>
    )
  }
}

export default Main;

