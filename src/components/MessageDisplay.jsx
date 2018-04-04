import React from 'react';
import MessageContent from '../components/MessageContent';

export default class MessageDisplay extends React.Component{
    render(){
        return(
        	<div>
	            <div className="row">
	            	<div className="col-sm-12 ">
	            		<div className="messageFirstDiv">
	            			Praktice.ai Assignment
		            	</div>
	            	</div>
	            </div>
	           
	           <div className="row">
	            	<div className="col-sm-12">
		            	<div className="contentDiv"> 
		            		<div className=" row cardContainer">
	            				<MessageContent />
	            				<MessageContent />
	            				<MessageContent />
	           				</div>
		            	</div>
	            	</div>
	            </div>		

	            <div className="row">
        			<div className="col-sm-12">
	            		<button className="readyToRockBtn">Conversations !</button>
        			</div>
        		</div>
            </div>
        )
    }
}