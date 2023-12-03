import {React, useState} from 'react';
import Sidebars from './Sidebars';
import DisplayEditPromo from './DisplayEditPromo';
import DisplayAddPromo from './DisplayAddPromo';

function Promotions() {
    const [editPromo, setEditPromo] = useState(false);
    const [addPromo, setAddPromo] = useState(false);

    return (
        <body style={{height:"100%", backgroundImage: "url('/dashboard_bg.jpg')", backgroundSize:"cover" }}>
            <Sidebars/>
            <div className="dashboard">
                <div className="header">
                    <h1>Promotions & Coupons</h1>
                    {/* <div>Logo</div> */}
                </div>
                <div className="buttons-group">
                    <button className='dashboard-button-clone' onClick={() => setEditPromo(true)}>Edit Promotions</button>
                    <button className='dashboard-button-clone' onClick={() => setAddPromo(true)}>Add Promotions</button>
                </div>
            </div>
            <div className='white'>
                <div className="pump-status">
                    <h2 style={{marginTop:"5%"}}>Current Promotions</h2>
                    <hr className='rounded' style={{marginTop:'10px'}}></hr>
                    <div className="pumps-group">
                        <div className="pump">
                            10% off all candy
                        </div>
                        <div className="pump">
                            Nov 1 2023 - Nov 8 2023
                        </div>
                    </div>
                    <div className="pumps-group">
                        <div className="pump">
                            Buy any 2 chips, get 1 free
                        </div>
                        <div className="pump">
                            Nov 1 2023 - Nov 12 2023
                        </div>
                    </div>
                    <div className="pumps-group">
                        <div className="pump">
                            Buy any 2L Pop, get 1 50% off
                        </div>
                        <div className="pump">
                            Nov 3 2023 - Nov 9 2023
                        </div>
                    </div>
                    <div className="pumps-group">
                        <div className="pump">
                            Car washes $5 off
                        </div>
                        <div className="pump">
                            Nov 12 2023 - Nov 28 2023
                        </div>
                    </div>
                </div>
            </div>

            <DisplayEditPromo isOpen={editPromo} onClose={() => setEditPromo(false)}></DisplayEditPromo>
            <DisplayAddPromo isOpen={addPromo} onClose={() => setAddPromo(false)}></DisplayAddPromo>
        </body>
    );
}

export default Promotions;