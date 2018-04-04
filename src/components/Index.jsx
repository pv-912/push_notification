import React from 'react';
import ReadyToRock from '../components/ReadyToRock';
import MainTop from '../components/MainTop';


import {Function1} from './utils/function1';

export default class HomeIndex extends React.Component{
    componentDidMount(){
        Function1();
    }

    render(){
        return(
        	<div className="parentDiv">
		            <MainTop /> 
		            <ReadyToRock />
            </div>
        )
    }
}