import React, { useState } from 'react';
import './index.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSendOTP = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // OTP sent successfully
        setOtpSent(true);
      } else {
        // Error sending OTP
        setError('Error sending OTP. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError('Error sending OTP. Please try again later.');
    }
  };

  const handleResetPassword = () => {
    // Here you would typically call an API to validate the OTP and reset the password
    if (otp === '') {
      setError('Please send OTP first.');
      return;
    }

    // In a real scenario, you would compare the provided OTP with the generated one
    // For simplicity, let's assume the provided OTP matches the generated one
    console.log('Password reset successful!');
    setError('');
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {!otpSent ? (
        <form onSubmit={(e) => { e.preventDefault(); handleSendOTP(); }}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }}>
          <div>
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
