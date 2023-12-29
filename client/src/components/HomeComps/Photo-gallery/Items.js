import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Routes, Route, useNavigate, Link} from 'react-router-dom'; 
import Profile from '../../Profile/Profile';


function Items({data}){

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const navigate = useNavigate();

    const navigateProfile = () => {
        // 👇️ navigate to /
        navigate('/profile');
    };

    
    return (
        <>
            <div className="row">
            {
                data.map((value)=>{
                const {id, image, title, description} = value;
                return (
                    <div className="col-sm-3 my-2" key={id} onClick={toggle}>
                    <div className="card bg-light text-center" style={{border:"1px solid black",borderRadius:"10px",boxShadow: "0px 3px 6px rgba(0,0,0,0.2)"}}>
                        <img src={image} alt="" className="card-img-top"/>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                )
                })
                }
                <div class="d-flex justify-content-center">
                    <button style={{border:"1px solid black", marginTop:"1rem", padding:"10px", maxWidth:"fit-content",borderRadius:"10px"}} ><Link to={"/doctors"} style={{color:"#343531", textDecoration:"none"}}>Find Your Doctor</Link></button>
                </div>
            </div>
        <Modal isOpen={modal} toggle={toggle} size="lg">
            <Profile />
            <Button color="success" onClick={navigateProfile}>Full Profile</Button>
        </Modal>
        </>
    )
}

export default Items;