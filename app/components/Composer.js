import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CompositionType from './CompositionType';

class Composer extends React.Component {
	render() {
		var styles = {
			main: {
				paddingTop: '70px',
			},
		}
		var composer = this.props.params.composer
		return (
			<div className="container" style={styles.main}>
		      	<div className="row">
		      		<CompositionType name={"Symphonies"} 
		      						composer={composer}/>
					<CompositionType name={"Piano Sonatas"}
									composer={composer}/>
					<CompositionType name={"Violin Sonatas"}
									composer={composer}/>
					<CompositionType name={"Piano Concerti"}
									composer={composer}/>
					<CompositionType name={"Violin Concerti"}
									composer={composer}/>
					<CompositionType name={"String Quartets"}
									composer={composer}/>
		      	</div>
		    </div>
		)
	}
}

export default Composer;