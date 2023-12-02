import './App_2.css';
import {useState} from 'react';
import Sidebars from './Sidebars.js';
import React from 'react';
import PopUp from './PopUp.js';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {Octane87, Octane89, Octane93, Diesel, Propane, Octane87_P, Octane89_P, Octane93_P, Diesel_P, Propane_P, setFuel_P } from "./Variables.js";
import {Link} from 'react-router-dom';


// refrence 
// to get the increment code
// https://learnersbucket.com/examples/interview/increment-counter-component-in-react/


function UpdateFuel() {
    const [firstState, setFirstState] = useState(false);

    const [Octane87_t, setOctane87_t] = useState(0);
    const [Octane89_t, setOctane89_t] = useState(0);
    const [Octane93_t, setOctane93_t] = useState(0);
    const [Diesel_t, setDiesel_t] = useState(0);
    const [Propane_t, setPropane_t] = useState(0);
    
    const Final_Call = () => {
        setFirstState(true);
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    
    const add_87 = () => {
        var int = Octane87_t +1;
        setOctane87_t(int);
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_87 = () => {
        // if((Octane87-Octane87_t) >= 1){
         setOctane87_t(Octane87_t - 1);
        // }
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const add_89 = () => {
        setOctane89_t(Octane89_t + 1);
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_89 = () => {
        // if((Octane89-Octane89_t) >= 1){
        // setOctane87_t(Octane89_t - 1);
        // }
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 


    const add_93 = () => {
        setOctane93_t(Octane93_t + 1);
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_93 = () => {
        // if((Octane93-Octane93_t) >= 1){
         setOctane93_t(Octane93_t - 1);
        // }
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 


    const add_d = () => {
        setDiesel_t(Diesel_t + 1);
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_d = () => {
        //if((Diesel-Diesel_t) >= 1){
        setDiesel_t(Diesel_t - 1);
        //}
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const add_p = () => {
        setPropane_t(Propane_t + 1);
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    };
    const decrease_p = () => {
        //if((Propane-Propane_t) >= 1){
        setPropane_t(Propane_t - 1);
        //}
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const handleChange_87 = (inputText) => {
        
        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
            if((Octane87-Octane87_t) >= 1){
                setOctane87_t(Octane87_t);
            }
            
        }
        else{
            if((Octane87-Octane87_t) >= 1){
                setOctane87_t(int);
                }
        }
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const handleChange_89 = (inputText) => {
        
        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
            setOctane89_t(Octane89_t);
        }
        else{
            setOctane89_t(int);
        }
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const handleChange_93 = (inputText) => {
        
        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
            setOctane93_t(Octane93_t);
        }
        else{
            setOctane93_t(int);
        }
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const handleChange_d = (inputText) => {
        
        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
            setDiesel_t(Diesel_t);
        }
        else{
            setDiesel_t(int);
        }
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 

    const handleChange_p = (inputText) => {
        
        const ints = Number(inputText.target.value);
        const int = parseInt(ints);

        if(isNaN(int)){
            
            setPropane_t(Propane_t);
        }
        else{
            setPropane_t(int);
        }
        setFuel_P(Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t);
    }; 



  return (

    <div className="Inventory_Page">
      <Sidebars />
      <div className="corner">Update Fuel</div>
      {/* <div className='search'><input type="text" name="name" /></div> */}
      <div class="div6">
      <table>

<tr>
    <th>Fuel</th>
    <th>Quantity</th>
    <th>ADD/REMOVE</th>
</tr>

<tr>

    <td>Octane 87</td>
    <td>{Octane87_t}</td>
    <td>
        <div className='div6'>
            <button className="Update_Fuel" onClick={add_87}>+</button>
            <button className="Update_Fuel" onClick={decrease_87}>-</button>
        </div>
        <input type="text" onChange={handleChange_87} value={Octane87_t}/>
        
    </td>
</tr>
<tr>
    <td>Octane 89</td>
    <td>{Octane89_t}</td>
    <td>
        <div className='div6'>
            <button className="Update_Fuel" onClick={add_89}>+</button>
            <button className="Update_Fuel" onClick={decrease_89}>-</button>
        </div>
        <input type="text"  onChange={handleChange_89} value={Octane89_t}/>


    </td>
</tr>
<tr>
    <td>Octane 93</td>
    <td>{Octane93_t}</td>
    <td>            
        <div className='div6'>
            <button className="Update_Fuel" onClick={add_93}>+</button>
            <button className="Update_Fuel" onClick={decrease_93}>-</button>
        </div>
        <input type="text" onChange={handleChange_93} value={Octane93_t}/>
    </td>    
</tr>



<tr>
    <td>Diesel</td>
    <td>{Diesel_t}</td>
    <td>            
        <div className='div6'>
            <button className="Update_Fuel" onClick={add_d}>+</button>
            <button className="Update_Fuel" onClick={decrease_d}>-</button>
        </div>
        <input type="text" onChange={handleChange_d} value={Diesel_t}/>
    </td>
        
</tr>
<tr>
    <td>Propane</td>
    <td>{Propane_t}</td>
    <td> 
        <div className='div6'>
            <button className="Update_Fuel" onClick={add_p}>+</button>
            <button className="Update_Fuel" onClick={decrease_p}>-</button>
        </div>
        <input type="text" onChange={handleChange_p} value={Propane_t}/>
    </td>
</tr>

</table>

      </div>
      <div className='div2'>
      <button className='Update_Fuel'onClick={Final_Call}>Review and Submit</button>
      </div>
      {firstState && (
        // Octane87_P = Octane87_t,
        // Octane89_P = Octane89_t,
        // Octane93_P = Octane93_t,
        // Diesel_P = Diesel_t,
        // Propane_P = Propane_t,
        <PopUp isOpen={firstState} onClose={() => setFirstState(false)}></PopUp>
        // ,Octane87_t = Octane87_P,
        // Octane89_t = Octane89_P,
        // Octane93_t = Octane93_P,
        // Diesel_t = Diesel_P,
        // Propane_t = Propane_P
        // ,Octane87_t = 0,
        // Octane89_t = 0,
        // Octane93_t = 0,
        // Diesel_t = 0,
        // Propane_t = 0
      )} 
      
      

    </div>

  );
}


export default UpdateFuel;
