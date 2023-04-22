import React from 'react';
import { useDispatch } from 'react-redux';
import { setResult } from './redux/slices/calculateSlice';
const ButtonClick = ({ digit }) => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(setResult(digit))}>{digit}</button>;
};
export default ButtonClick;
