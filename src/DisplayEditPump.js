import React, {Component} from 'react';
import {Pump_1, Pump_2, Pump_3, Pump_4, Pump_5, Pump_6, updatePump} from "./Variables.js";

class DisplayEditPump extends Component{

    getColor = (newStatus) => {
        return newStatus === "Available" ? "green" : "red";
    };

    ChangeStatus = (event) => {
        event.preventDefault();
		this.props.onClose();

        var pump = event.target.Pump.value;
        var status = event.target.Status.value;
        var color = this.getColor(status);
        updatePump(pump, status, color);
    };
	
	
	render(){
		let dialog = (
			<div className="overlay">
				<form onSubmit={this.ChangeStatus}>
					<div className="GasDialog">
						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Submit</button>
                            <button className='Cancel'>Reboot</button>
							<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
						</div>
						
						<div className="AddGas_Div">EDIT PUMP STATUS</div>
						<div className="Pump_Div">
							<div className="Pump_label">Select Pump</div>
							<div className="Pump_Selection">

								<div className="pump1Div">
									<input type="radio" id="pump1" name="Pump" value="pump1" />
									<label for="pump1">Pump 1 ({Pump_1})</label>
								</div>
								
								<div className="pump2Div">
									<input type="radio" id="pump2" name="Pump" value="pump2" />
									<label for="pump2">Pump 2 ({Pump_2})</label>
								</div>
								
								<div className="pump3Div"> 
									<input type="radio" id="pump3" name="Pump" value="pump3" />
									<label for="pump3">Pump 3 ({Pump_3})</label>
								</div>
								
								<div className="pump4Div">
									<input type="radio" id="pump4" name="Pump" value="pump4" />
									<label for="pump4">Pump 4 ({Pump_4})</label>
								</div>
								
								<div className="pump5Div">
									<input type="radio" id="pump5" name="Pump" value="pump5" />
									<label for="pump5">Pump 5 ({Pump_5})</label>
								</div>
								
								<div className="pump6Div">
									<input type="radio" id="pump6" name="Pump" value="pump6" />
									<label for="pump6">Pump 6 ({Pump_6})</label>
								</div>
							</div>
						</div>
							
						<div className="Gas_Div">	
							<div className="Gas_Label">Status</div>
							<div className="Gas_Selection">
								<div className="RegularDiv">
									<input type="radio" id="enable" name="Status" value="Available" />
									<label for="enable">Enable</label>
								</div>
								
								<div className="PremiumDiv">
									<input type="radio" id="disable" name="Status" value="Out of Order" />
									<label for="disable">Disable</label>
								</div>								
							</div>
						</div>
					</div>
				</form>
			</div>
		);
		
		if(! this.props.isOpen){
			dialog = null;
		}
		
		else{
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default DisplayEditPump;