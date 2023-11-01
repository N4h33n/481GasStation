import {React, useState} from 'react';
import PumpStatus from './PumpStatus';
import Sidebars from './Sidebars';
import DisplayEditPump from './DisplayEditPump';
import DisplayTestPump from './DisplayTestPump';

function PumpManagement() {
    const [editPump, setEditPump] = useState(false);
    const [testPump, setTestPump] = useState(false);

    return (
        <div>
            <Sidebars/>
            <div className="dashboard">
                <div className="header">
                    <h1>Pump Management</h1>
                    {/* <div>Logo</div> */}
                </div>
                <div className="buttons-group">
                    <button className='dashboard-button' onClick={() => setEditPump(true)}>Edit Pump Status</button>
                    <button className='dashboard-button'>View Cameras</button>
                    <button className='dashboard-button' onClick={() => setTestPump(true)}>Test Pump (Override)</button>
                </div>
            </div>
            <div className='white'>
                <PumpStatus />
            </div>

            <DisplayEditPump isOpen={editPump} onClose={() => setEditPump(false)}></DisplayEditPump>
            <DisplayTestPump isOpen={testPump} onClose={() => setTestPump(false)}></DisplayTestPump>
        </div>
    );
}

export default PumpManagement;