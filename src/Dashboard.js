import React from 'react';
import PumpStatus from './PumpStatus';
import Sidebars from './Sidebars';

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
                    <button className='dashboard-button'>Pump Monitor</button>
                </div>
                <div className="buttons-group">
                    <button className='dashboard-button'>Promotions & Coupons</button>
                    <button className='dashboard-button'>Button</button>
                    <button className='dashboard-button'>Checkout</button>
                </div>
            </div>
            <div className='white'>
                <PumpStatus />
            </div>
        </div>
    );
}

export default Dashboard;
