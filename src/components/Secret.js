import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import niklasDans from '../img/niklasdans.MOV';

const myKey = "niklas";
export const SecretComponent = () => {
    let keyInput = ""
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    document.addEventListener("keydown", (key)=>{
        keyInput += key.key
        if(myKey === keyInput){
            return(
                setShow(true)
            );
               
        } else {
            setTimeout(() => {
                keyInput=""
            }, 2000);
        }
    })

    return (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body><video width="400" controls autoPlay><source src={niklasDans} type="video/mp4"/></video></Modal.Body>
          </Modal>
        </>
      );
}