import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/styles.module.css';

function AddressDetails({ formData, setFormData }) {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (address.trim() !== '') {
      setFormData({ ...formData, address });
      navigate('/payment');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className={`container ${styles.formContainer}`}>
      <h2>Address Details</h2>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleNext}>Next</button>
    </div>
  );
}

export default AddressDetails;
