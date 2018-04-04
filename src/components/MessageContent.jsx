import React from 'react';
import '../components/data.json';
var data = JSON.stringify("../components/data.json", 2, 2);
export default class MessageContent extends React.Component{
    render(){
        return(
        	<div>
		        <div className="col-sm-4 cards">
		        	<img src="/img/img2.jpg" className="cardImage" />
		        	<p className="clinicName text-justify"> { data.message}</p>
		        	<p className="clinicAddress text-justify">HELLP (haemolysis, elevated liver enzymes, low platelet count) syndrome usua wome</p>
		        	<div className="bookAppointment">
		        		<a href="#" >Book Appointment</a>
		        	</div>
		        	<div className="moreInfo">
		        		<a href="#" >More Info</a>
		        	</div>
		        </div>
            </div>
        )
    }
}