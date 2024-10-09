import React from 'react';

const PasswordStrength = ({ password }) => {
  const calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>_]/.test(password)) strength++;
    return strength;
  };

  const strength = calculateStrength(password);
  const strengthColor = ['red', 'orange', 'yellow', 'green', 'blue'];

  return (
    <div className='password-strength'>
      <h3>Сила паролю:</h3>
      <div
        style={{
          width: `${(strength / 5) * 100}%`,
          height: '10px',
          backgroundColor: strengthColor[strength - 1],
          transition: 'all 0.3s ease',
          borderRadius: '4px',
        }}
      ></div>
    </div>
  );
};

export default PasswordStrength;