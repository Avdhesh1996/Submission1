import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalDetails from './components/PersonalDetails';
import AddressDetails from './components/AddressDetails';
import PaymentDetails from './components/PaymentDetails';
import Result from './components/Result';
import styles from './css/styles.module.css'




function App() {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<PersonalDetails formData={formData} setFormData={setFormData} />} />
          <Route path="/address" element={<AddressDetails formData={formData} setFormData={setFormData} />} />
          <Route path="/payment" element={<PaymentDetails formData={formData} setFormData={setFormData} />} />
          <Route path="/result" element={<Result formData={formData} />} />
    
        
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
