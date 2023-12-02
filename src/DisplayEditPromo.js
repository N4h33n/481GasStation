import React, {Component} from 'react';

class DisplayAddPromo extends Component{
	
	render(){
		let dialog = (
			<div className="overlay">
				<form>
					<div className="GasDialog">
						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Submit</button>
							<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
						</div>
						
						<div className="AddGas_Div">EDIT PROMO</div>
						<div className="Pump_Div">
							<div className="Pump_label">Promo</div>
                            <div className="Gas_Selection">
                                <div className="RegularDiv">
                                    <label for="enable">Select Promo    </label>
									<input id="enable" name="Status" value="10% off all Candy          ⌄"/>
								</div>					
							</div>
							<div className="Gas_Selection">
								<div className="pump1Div">
									<input type="radio" id="pump1" name="Pump" value="pump1" />
									<label for="pump1">Item</label>
								</div>
								<div className="pump2Div">
									<input type="radio" id="pump2" name="Pump" value="pump2" />
									<label for="pump2">Category</label>
								</div>
							</div>
                            <div className="Gas_Selection">
                                <div className="RegularDiv">
                                    <label for="enable">Select Category    </label>
									<input id="enable" name="Status" value="Candy                          ⌄"/>
								</div>					
							</div>
                            <div className="Gas_Selection">
                                <div className="RegularDiv">
                                    <label for="enable">Number of items bought    </label>
									<input id="enable" name="Status" value="1"/>
								</div>					
							</div>
						</div>
							
						<div className="Gas_Div">	
							<div className="Gas_Label">Discount</div>
							<div className="Gas_Selection">
								<div className="RegularDiv">
									<input type="radio" id="enable" name="Status" value="Available" />
									<label for="enable">Percetage</label>
								</div>
								
								<div className="PremiumDiv">
									<input type="radio" id="disable" name="Status" value="Out of Order" />
									<label for="disable">Amount</label>
								</div>							
							</div>
                            <div className="Gas_Selection">
                                <div className="RegularDiv">
                                    <label for="enable">Percentage Off    </label>
									<input id="enable" name="Status" value="10%"/>
								</div>					
							</div>
                            <div className="Gas_Selection">
                                <div className="RegularDiv">
                                    <label for="enable">Number of items discounted    </label>
									<input id="enable" name="Status" value="1"/>
								</div>					
							</div>
                            <div className="Gas_Selection">
                                <div className="RegularDiv">
                                    <label for="enable">Start Date  </label>
									<input id="enable" name="Status" value="2023-11-01"/>
								</div>					
							</div>
                            <div className="Gas_Selection">
                                <div className="RegularDiv">
                                    <label for="enable">End Date    </label>
									<input id="enable" name="Status" value="2023-11-08"/>
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

export default DisplayAddPromo;