import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';

const Sidebars = () => {
    const [toggled, setToggled] = React.useState(false);
  
    return (
      <div style={{ display: 'flex', position: 'absolute'}}>
        <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" backgroundColor="#bcf3ff">
          <Menu>
            <MenuItem component={<Link to="/" />}> Home</MenuItem>
            <MenuItem component={<Link to="/FuelManagment_Page" />}> Fuel</MenuItem>
            <MenuItem> Inventory</MenuItem>
            <MenuItem component={<Link to="/PumpManagement" />}> Pumps</MenuItem>
            <MenuItem> Promotions</MenuItem>
            <MenuItem component={<Link to="/App" />}> Checkout</MenuItem>
          </Menu>
        </Sidebar>
        <main style={{display: 'flex', padding: 10 }}>
          <div>
            <button className="sb-button" onClick={() => setToggled(!toggled)}> 
              =
            </button>
          </div>
        </main>
      </div>
  );
};

export default Sidebars;