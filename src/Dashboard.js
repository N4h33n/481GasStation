import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <div className='div1'>Dashboard</div>
            <div className='divDashboard'>
                <button className='DashboardButton'>Button</button>
                <button className='DashboardButton'>Button</button>
                <button className='DashboardButton'>Button</button>
            </div>
            <div className='divDashboard'>
                <button className='DashboardButton'>Button</button>
                <button className='DashboardButton'>Button</button>
                <button className='DashboardButton' onClick={<Link to='/checkout'/>}>Checkout</button>
            </div>
            <div className='divSub'>Pump Status</div>
            <div className='divDashboard'>
                <div className='pumpStatus'>
                    
                </div>
            </div>

        </div>
    );
}

export default Dashboard;