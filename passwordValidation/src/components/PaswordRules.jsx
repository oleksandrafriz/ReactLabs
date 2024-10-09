import React from 'react';

const PasswordRules = ({ password }) => {

  const rules = [
    { 
      text: 'Містить хоча б 8 символів',
      test: (password) => password.length >= 8
    },

    { 
      text: 'Містить хоча б одну велику літеру',
      test: (password) => /[A-Z]/.test(password) 
    },

    { 
      text: 'Містить хоча б одну малу літеру',
      test: (password) => /[a-z]/.test(password) 
    },

    { 
      text: 'Містить хоча б одну цифру',
      test: (password) => /\d/.test(password) 
    },

    { 
      text: 'Містить хоча б один спеціальний символ',
      test: (password) => /[!@#$%^&*(),.?":{}|<>_]/.test(password) 
    },
  ];

  return (
    <div className="password-rules">
      <ul>
        {rules.map((rule, index) => (
          <li key={index} style={{ color: rule.test(password) ? 'green' : 'red' }}>
            {rule.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordRules;