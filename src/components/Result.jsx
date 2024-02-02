import React from 'react';
import styles from '../css/styles.module.css';
function Result({ formData }) {
  return (
    <div className={styles.container}>
      <h2>Summary</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Address: {formData.address}</p>
      <p>Card Number: {formData.cardNumber}</p>
      <p>Expiry: {formData.expiry}</p>
      <p>CVV: {formData.cvv}</p>
    </div>
  );
}

export default Result;
