

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/styles.module.css';

function PersonalDetails({ formData, setFormData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (name.trim() !== '' && email.trim() !== '') {
      setFormData({ ...formData, name, email });
      navigate('/address');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className={`container ${styles.formContainer}`}>
      <h2>Personal Details</h2>
      <div className="mb-3">
      
      <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-3">
      <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleNext}>Next</button>
    </div>
    
    
  );
}

export default PersonalDetails;

