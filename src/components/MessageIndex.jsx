import React from 'react';
import MessageDisplay from '../components/MessageDisplay';


export default class MessageIndex extends React.Component{
    render(){
        return(
        	<div className="parentDiv">
		            <MessageDisplay /> 
            </div>
        )
    }
}