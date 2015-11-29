import React from 'react';

class Navbar extends React.Component {
	render() {
		return (
			<nav id="mainNav" className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
			    <div className="container">
			        <div className="navbar-header">
			            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
			                <span className="sr-only">Toggle navigation</span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			            </button>
			            <a className="navbar-brand" href="#">Classical</a>
			        </div>
			        <div className="collapse navbar-collapse" id="navbarCollapse">
			            <ul className="nav navbar-nav">
			                <li className="active"><a href="#" target="_blank">Home</a></li>
			                <li><a href="#" target="_blank">About</a></li>
			                <li><a href="#" target="_blank">Contact</a></li>
			            </ul>
			        </div>
			    </div>
			</nav>
		);
	}
}

export default Navbar;