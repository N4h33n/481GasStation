import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import './App_2.css';

const Sidebars = () => {
    const [toggled, setToggled] = React.useState(false);
  
    return (
      <div style={{ display: "flex", position: 'absolute'}}>
        <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" backgroundColor="#00b4ff" transitionDuration="500">
          <Menu>
			<MenuItem className="menu1" icon={<img width='80px' src='/Shell_Logo.png'/>} onClick={() => setToggled(!toggled)}><h2>SHELL</h2></MenuItem>
            <MenuItem icon={<img width='30px' src='/Home_Icon.png'/>} component={<Link to="/" />}> Home</MenuItem>
            <MenuItem icon={<img width='30px' src='/Fuel_Icon.png'/>} component={<Link to="/FuelManagment_Page" />}> Fuel</MenuItem>
            <MenuItem icon={<img width='30px' src='/Inventory_Icon.png'/>}> Inventory</MenuItem>
            <MenuItem icon={<img width='30px' src='/Pump_Icon.png'/>} component={<Link to="/PumpManagement" />}> Pumps</MenuItem>
            <MenuItem icon={<img width='30px' src='/Sale_Icon.png'/>}> Promotions</MenuItem>
            <MenuItem icon={<img width='30px' src='/Checkout_Icon.png'/>} component={<Link to="/App" />}> Checkout</MenuItem>
          </Menu>
        </Sidebar>
        <main style={{display: 'flex', padding: 10 }}>
          <div>
			<img src={'/icons8-menu-50.png'} onClick={() => setToggled(!toggled)} class="img-hover" style={{cursor:'pointer'}}></img>
          </div>
        </main>
      </div>
  );
};

export default Sidebars;