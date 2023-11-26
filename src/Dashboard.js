import React from 'react';
import PumpStatus from './PumpStatus';
import Sidebars from './Sidebars';
import {Link} from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <Sidebars/>
            <div className="dashboard">
                <div className="header">
                    <h1>Dashboard</h1>
                    {/* <div>Logo</div> */}
                </div>
                <div className="buttons-group">
                    <button className='dashboard-button'>Fuel Management</button>
                    <button className='dashboard-button'>Inventory Management</button>
                    <Link to="PumpManagement" className='dashboard-button'>Pump Management</Link>
                </div>
                <div className="buttons-group">
                    <button className='dashboard-button'>Promotions & Coupons</button>
                    <Link to="/App" className='dashboard-button'>Checkout</Link>
                </div>
            </div>
            <div className='white'>
                <PumpStatus />
            </div>
            
        </div>
    );
}

export default Dashboard;
