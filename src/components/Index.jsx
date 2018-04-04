import React from 'react';
import ReadyToRock from '../components/ReadyToRock';
import MainTop from '../components/MainTop';


export default class HomeIndex extends React.Component{
    render(){
        return(
        	<div className="parentDiv">
		            <MainTop /> 
		            <ReadyToRock />
            </div>
        )
    }
}