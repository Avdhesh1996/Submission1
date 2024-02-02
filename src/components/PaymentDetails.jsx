import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/styles.module.css';

function PaymentDetails({ formData, setFormData }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (cardNumber.trim() !== '' && expiry.trim() !== '' && cvv.trim() !== '') {
      setFormData({
        ...formData,
        cardNumber: cardNumber,
        expiry: expiry,
        cvv: cvv
      });
      navigate('/result');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className={`container ${styles.formContainer}`}>
      <h2 className="mb-4">Payment Details</h2>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleNext}>Submit</button>
    </div>
  );
}

export default PaymentDetails;
