import {React, useState} from 'react';
import Sidebars from './Sidebars';
import DisplayEditPromo from './DisplayEditPromo';
import DisplayAddPromo from './DisplayAddPromo';
import { promos } from './Variables';

function Promotions() {
    const [editPromo, setEditPromo] = useState(false);
    const [addPromo, setAddPromo] = useState(false);
    const [promotions, setPromotions] = useState(promos);

    const addNewPromo = (newPromo) => {
        promos.push(newPromo)
        setPromotions([...promotions, promos]);
    };

    const editPromos = (newPromo) => {
        setPromotions(newPromo);
    }

    const deleteThePromo = (newPromo) => {
        setPromotions(newPromo);
    };

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
                    {promos.map(promo => (
                        <div className='pumps-group'>
                            <div className="pump">
                                {promo.name}
                            </div>
                            <div className="pump">
                                {promo.start} --{'>'} {promo.end}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <DisplayEditPromo isOpen={editPromo} onClose={() => setEditPromo(false)} onEditPromo={editPromos} onDeletePromo={deleteThePromo}></DisplayEditPromo>
            <DisplayAddPromo isOpen={addPromo} onClose={() => setAddPromo(false)} onAddPromo={addNewPromo}></DisplayAddPromo>
        </body>
    );
}

export default Promotions;