import React from 'react';
import Contact from '../components/data.json';

import MessageContent from '../components/MessageContent';

export default class MessageDisplay extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			json: []
		}
	}
	componentDidMount() {
		this.setState( prevState => {
			return {
				json: Contact
			}
		})
	}
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
								{
									this.state.json.message ? this.state.json.message.attachment.payload.elements.map((data, i) => {
										return (
											<MessageContent data={data} key={i+"key"}/>
										)
									}) : null
								}
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