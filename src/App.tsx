import React, { useCallback, useState } from 'react';

import './App.scss';
import NumberForm from './components/numberForm/numberForm';
import ResponceMessage from './components/responceMessage/responceMessage';
import { newOrder } from './services/axios/requests';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function inputOnChange(inputValue: string) {
    setShowError(false);
    setShowSuccess(false);
    setInputValue(inputValue);
  }
  async function inputOnSubmit() {
    setShowError(false);
    setShowSuccess(false);
    try {
      await newOrder(inputValue);
      setShowSuccess(true);
    } catch (e) {
      setShowError(true);
    }
  }

  const callbacks = {
    inputOnChange: useCallback((inputValue: string) => inputOnChange(inputValue), []),
    inputOnSubmit: useCallback(() => inputOnSubmit(), []),
  };

  return (
    <div className='App'>
      <NumberForm onChange={callbacks.inputOnChange} onSubmit={callbacks.inputOnSubmit} />
      {showSuccess && <ResponceMessage color='green' text='Успех' />}
      {showError && <ResponceMessage color='red' text='Ошибка' />}
    </div>
  );
}

export default App;
