import React from 'react';
import TipContext from './TipContext';
import { useState } from 'react';

const TipContextProvider = (props) => {
  const billValidation = (value) => !isNaN(value);
  const customValidation = (value) => !isNaN(value) && value > 0;
  const peopleValidation = (value) => !isNaN(value) && value > 0;
  const zeroValidation = (value) => value === '0';

  const [billValue, setBillValue] = useState('');
  const [billIsTouched, setBillIsTouched] = useState(false);
  const billIsValid = billValidation(billValue);
  const billIsInvalid = !billIsValid && billIsTouched;

  const [customValue, setCustomValue] = useState('');
  const [customIsTouched, setCustomIsTouched] = useState(false);
  const customIsValid = customValidation(customValue);
  const customIsInvalid = !customIsValid && customIsTouched;

  const [peopleValue, setPeopleValue] = useState();
  const [peopleIsTouched, setPeopleIsTouched] = useState(false);
  const peopleIsValid = peopleValidation(peopleValue);
  const peopleIsInvalid = !peopleIsValid && peopleIsTouched;
  const peopleIsZero = zeroValidation(peopleValue);

  const tipAmount = (billValue * customValue * 0.01) / peopleValue;

  const totalAmount =
    (parseFloat(billValue) + parseFloat(tipAmount)) / peopleValue;

  const billChangeHandler = (e) => {
    setBillValue(e.target.value);
  };
  const billBlurHandler = () => {
    setBillIsTouched(true);
  };
  const customChangeHandler = (e) => {
    setCustomValue(e.target.value);
  };
  const customBlurHandler = () => {
    setCustomIsTouched(true);
  };
  const peopleChangeHandler = (e) => {
    setPeopleValue(e.target.value);
  };
  const peopleBlurHandler = () => {
    setPeopleIsTouched(true);
  };

  const onClickTipPercentHandler = (e) => {
    setCustomValue(e.target.id);
  };

  const reset = () => {
    setBillValue('');
    setBillIsTouched(false);
    setCustomIsTouched(false);
    setCustomValue('');
    setPeopleIsTouched(false);
    setPeopleValue('');
  };

  const ctxData = {
    billValue,
    billIsInvalid,
    billChangeHandler,
    billBlurHandler,
    billIsTouched,

    customValue,
    customIsInvalid,
    customBlurHandler,
    customChangeHandler,
    customIsTouched,

    peopleBlurHandler,
    peopleChangeHandler,
    peopleIsInvalid,
    peopleValue,
    peopleIsTouched,
    peopleIsZero,

    onClickTipPercentHandler,

    tipAmount,
    totalAmount,

    reset,
  };

  return (
    <TipContext.Provider value={ctxData}>{props.children}</TipContext.Provider>
  );
};

export default TipContextProvider;
