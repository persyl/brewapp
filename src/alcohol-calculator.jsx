import React from'react';

export default class AlcoholCalculator extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
  		ogValue: '',
  		fgValue: '',
  		abw: '',
  		abv: '',
  	};
  }

  ogFieldChange(e){
  	console.log('OG changed', e.target.value);
  	this.setState({ogValue: e.target.value,});
  }

    fgFieldChange(e){
  	console.log('FG changed', e.target.value);
  	this.setState({fgValue: e.target.value,});
  }

  calcFGbyVolume(ogValue){
  	return 0;
  }

  calcFGbyWeight(ogValue){
  	return 0;
  }

  render(){
    return (<div>
    	<ul>
	        <li>1a) (OG - FG) x 0,105 => alkohol i viktprocent <span>{this.state.abw}</span></li>
	        <li>1b) (OG - FG) x 0,105 x 1,25 => alkohol i volymprocent <span>{this.state.abv}</span></li>
    	</ul>
    	<label style={styles.inputLabel} for="og">OG (Original Gravity)</label>
    	<input style={styles.inputValue} id="og" type="text" value={this.state.ogValue} onChange={this.ogFieldChange.bind(this)}/>

    	<label style={styles.inputLabel} for="og">FG (Final Gravity)</label>
    	<input style={styles.inputValue} id="og" type="text" value={this.state.fgValue} onChange={this.fgFieldChange.bind(this)}/>
    	</div>);
  }
}

const styles = {
	inputLabel:{
		display: 'block',
	},
	inputValue:{
		borderWidth: 1,
		borderColor: '#dddddd',
		fontSize: 18,
		fontWeight: 'bold',
	}
};