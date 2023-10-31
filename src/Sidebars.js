import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Sidebars = () => {
    const [toggled, setToggled] = React.useState(false);
  
    return (
      <div style={{ display: 'flex', }}>
        <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" backgroundColor="#bcf3ff">
          <Menu>
            <MenuItem> Home</MenuItem>
            <MenuItem> Fuel</MenuItem>
            <MenuItem> Inventory</MenuItem>
            <MenuItem> Pumps</MenuItem>
            <MenuItem> Promotions</MenuItem>
            <MenuItem> Checkout</MenuItem>
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

