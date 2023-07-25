import React from 'react';

const CurrencyDropdown = ({ onSelectCurrency }) => {
  const currencies = ['USD', 'EUR', 'GBP']; // Add more currencies as needed

  return (
    <select onChange={(e) => onSelectCurrency(e.target.value)}>
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;
