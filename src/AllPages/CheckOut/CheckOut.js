import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {

    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
    const handleNavigate = () =>{
        navigate1('/home');
    } 

  const handleConfirm = () =>{
      navigate2('/userprofile');
  }
     
    return (
        <div className='container'>
          <h2 className='text-center text-primary mt-5'>Are Your Sure for Enroll this Course? </h2>
          <p className='text-danger'> 
              if You agree please Clicke <button onClick={handleConfirm}> Confirm </button>
          </p> 
          <p  className='text-danger'> 

          or click <button onClick={handleNavigate}> Not Now </button>
          </p>
        </div>
    );
};

export default CheckOut;