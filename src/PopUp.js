import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import logo from './logo.svg';
import './App.css';

import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import BarGraph from './BarGraph';
import Fuel_BarGraphs from './Fuel_BarGraphs';
import SalesLineGraph from './Sales_Trends'

import Chart from 'chart.js/auto';
import DropdownMenu from './order_inventory';

class PopUp extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: true
    }
  }
  

  openBox = () => {
    this.setState({
      isOpen: true
    })
  }

  closeBox = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {

    return (
        
      <div>
        <button onClick={this.openBox}>Open ReactDialogBox </button>

        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='60%'
             
             // color: rgb(89, 170, 236);
              headerBackgroundColor='rgb(89, 170, 236)'
              headerTextColor='white'
              
              headerHeight='65'
              closeButtonColor='Black'
              bodyBackgroundColor='lightgrey'
              bodyTextColor='black'
              bodyHeight='300px'
              headerText='Review Fuel Update'
            >
              <div>
                
              <table>
              <tr>
                <th>Octane 87</th>
                <th>Fuel</th>
                <th>3700 Units</th>
              </tr>
              </table>
              <div className='div2'>
              <button onClick={this.handleClick}>
                Submit Update
            </button>
            </div>
              </div>
              

            </ReactDialogBox>
          </>
        )}
      </div>
    )
  }
}

export default PopUp


/*import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import logo from './logo.svg';
import './App.css';

import Sidebars from './Sidebars';
import InventoryButton from './ViewInventoryButton';
import BarGraph from './BarGraph';
import Fuel_BarGraphs from './Fuel_BarGraphs';
import SalesLineGraph from './Sales_Trends'

import Chart from 'chart.js/auto';
import DropdownMenu from './order_inventory';

class PopUp extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: true
    }
  }
  

  openBox = () => {
    this.setState({
      isOpen: true
    })
  }

  closeBox = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {

    return (
        
      <div>
        <button onClick={this.openBox}>Open ReactDialogBox </button>

        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='60%'
             
             // color: rgb(89, 170, 236);
              headerBackgroundColor='rgb(89, 170, 236)'
              headerTextColor='white'
              
              headerHeight='65'
              closeButtonColor='Black'
              bodyBackgroundColor='lightgrey'
              bodyTextColor='black'
              bodyHeight='300px'
              headerText='Review Inventory Update'
            >
              <div>
                
              <table>
              <tr>
                <th>Cheetos</th>
                <th>Chips</th>
                <th>19 Units</th>
              </tr>
              </table>
              <div className='div2'>
              <button onClick={this.handleClick}>
                Submit Update
            </button>
            </div>
              </div>
              

            </ReactDialogBox>
          </>
        )}
      </div>
    )
  }
}

export default PopUp
*/


/**              <table>
              <tr>
                <th>Octane 87</th>
                <th>$1.39 Per Litre</th>
                <th>3700 Units</th>
                <th>$5143.00</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th>Tax:</th>
                <th>$257.15</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th>Total:</th>
                <th>$5400.15</th>
              </tr>
              </table> */