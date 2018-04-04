import React from 'react';
import {Function2} from './utils/function';

export default class ReadyToRock extends React.Component{
    render(){
        return(
        		<div className="row">
        			<div className="col-sm-12">
	            		<button className="readyToRockBtn" onClick={()=> Function2()}>Ready To Rock !</button>
        			</div>
        		</div>
        )
    }
}