import React from 'react';
import { useDispatch } from 'react-redux';
import { setOperation } from './redux/slices/calculateSlice';

const OperationButton = ({ digit }) => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(setOperation(digit))}>{digit}</button>;
};

export default OperationButton;
