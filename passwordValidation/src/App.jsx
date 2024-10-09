import React, { useState } from 'react';
import PasswordRules from './components/PaswordRules';
import PasswordStrength from './components/PasswordStrength';

const App = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='password-checker'>
      <h2>Перевірка паролю</h2>
      <input className='password-input'
        type='password'
        value={password}
        onChange={handlePasswordChange}
        placeholder='Введіть пароль'
      />
      <PasswordRules password={password} />
      <PasswordStrength password={password} />
    </div>
  );
};

export default App;
