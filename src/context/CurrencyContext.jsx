import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const EXCHANGE_RATES = {
  AED: { symbol: 'AED', rate: 1, position: 'after', label: 'UAE Dirham (AED)' },
  INR: { symbol: '₹', rate: 22.5, position: 'before', label: 'Indian Rupee (INR)' },
  USD: { symbol: '$', rate: 0.272, position: 'before', label: 'US Dollar (USD)' }
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('AED');

  // Convert base AED price to specified currency
  const convertPrice = (amountAED, targetCurrency = currency) => {
    const rate = EXCHANGE_RATES[targetCurrency]?.rate || 1;
    return Math.round(amountAED * rate);
  };

  // Format price string in target currency
  const formatPrice = (amountAED, targetCurrency = currency) => {
    if (!amountAED && amountAED !== 0) return '';
    const config = EXCHANGE_RATES[targetCurrency] || EXCHANGE_RATES.AED;
    const value = convertPrice(amountAED, targetCurrency);
    const formattedNum = value.toLocaleString('en-US');
    
    if (config.position === 'before') {
      return `${config.symbol}${formattedNum}`;
    } else {
      return `${formattedNum} ${config.symbol}`;
    }
  };

  // Get formatted object containing all 3 currencies simultaneously
  const getMultiCurrencyPrices = (amountAED) => {
    return {
      AED: formatPrice(amountAED, 'AED'),
      INR: formatPrice(amountAED, 'INR'),
      USD: formatPrice(amountAED, 'USD')
    };
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      convertPrice,
      formatPrice,
      getMultiCurrencyPrices,
      EXCHANGE_RATES
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
