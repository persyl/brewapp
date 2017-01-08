import React from'react';

import AlcoholCalculator from './alcohol-calculator.jsx';

export default class BrewApp extends React.Component{
	constructor(props){
		super(props);
	}

  render(){
    return (<div>
    	<p>Välkommen till Brewapp!</p>
    	<AlcoholCalculator />
    	</div>);
  }
}