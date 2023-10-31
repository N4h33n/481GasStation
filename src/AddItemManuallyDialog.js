import React, {Component} from 'react';

class DisplayAddItemManually extends Component {
    
    render() {
        let dialog = (

            <div className="overlay">
                <form>
					<div className="AddItemManuallyDialog">
						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Add</button>
							<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
						</div>
						
						<div className="AddGas_Div">ADD ITEM MANUALLY</div>
						
                        <div className="AddItemManuallyInputs">
                            <div className="Quantity_Div">
                                <label for="Quantity">Quantity: </label>
                                <input type="text" id="Quantity" name="Quantity" placeholder="Eg. 60"/>
                            </div>

                            <div className="Item_Div">
                                <label for="ItemName">Item Name: </label>
                                <input type="text" id="ItemName" name="ItemName" placeholder="Eg. 2L Soda"/>
                            </div>
                                
                            <div className="IndividualPrice_Div">	
                                <div>Calculated Price: $</div>
                                <div id="Price" className="Price"></div>
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

export default DisplayAddItemManually;