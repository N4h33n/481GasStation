import React from 'react';
import PumpStatus from './PumpStatus';
import Sidebars from './Sidebars';
import {Link} from 'react-router-dom';

function Dashboard() {
    return (
		<body style={{height:"100%", backgroundImage: "url('/dashboard_bg.jpg')", backgroundSize:"cover" }}>
            <Sidebars/>
                        <div>
                <div className="dashboard">
                    <div className="header" style={{marginBottom:'0'}}>
                        <h1 >Dashboard</h1>
                    </div>
                    <div className="buttons-group">
                        <Link to="/FuelManagment_Page" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Fuel Management</button>
                        </Link> 
                        <Link to="/InventoryManagment_Page" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Inventory Management</button>
                        </Link>
                        <Link to="/PumpManagement" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Pump Management</button>
                        </Link>
                    </div>
                    <div className="buttons-group">
                        <Link to="/Promotions" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Promotions & Coupons</button>
                        </Link>
                        <Link to="/App" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
			<div className='dashboard'>
                <PumpStatus />
            </div>
        </body>
    );
}

export default Dashboard;
