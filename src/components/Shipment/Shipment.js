import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';
// import { Link, useNavigate } from 'react-router-dom';

const Shipment = () => {
  
  const [user] = useAuthState(auth)
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  // const navigate = useNavigate();

  const handleNameBlur = event => {
    setName(event.target.value)
  }

  const handleAddressBlur = event => {
    setAddress(event.target.value)
  }

  const handlePhoneBlur = event => {
    setPhone(event.target.value)
  }

  const handleCreateUser = event => {
      event.preventDefault();
      const shipping = {email, name, address, phone}
      console.log(shipping);
    
  } 
  

  return (
    <div className='form-container'>
    <div>
      <h3 className='form-title' >Shipping Information</h3>
      <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="Your Name">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input value={user?.email} readOnly type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="Address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="Phone">Phone</label>
            <input onBlur={handlePhoneBlur} type="number" name="phone" id="" required/>
          </div>
           <p className='or'>
             <span><hr /></span>
             <span className='or-style'>or</span>
             <span><hr /></span>
           </p>
            <p style={{color: 'red'}} >{error}</p>
            <input className='form-submit' type="submit" value="Add Shipping" />
      </form>
    </div>      
  </div>
  );
};

export default Shipment;