import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import './styles.css';
import ButtonClick from './ButtonClick';
import { setClear } from './redux/slices/calculateSlice';
import { setDel } from './redux/slices/calculateSlice';
import OperationButton from './OperationButton';
function App() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculate.result);
  const number = useSelector((state) => state.calculate.number);
  // function handleClick(event) {
  //   setResult(result.concat(event));
  // }

  // function handleDelete() {
  //   setResult(result.slice(0, -1));
  // }

  // function handleCalculate() {
  //   try {
  //     setResult(eval(result).toString());
  //   } catch (error) {
  //     setResult('Error');
  //   }
  // }
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{number}</div>
        <div className="current-operand">{result}</div>
      </div>
      <button onClick={() => dispatch(setClear())} className="span-two">
        AC
      </button>
      <button onClick={() => dispatch(setDel())}>DEL</button>
      <OperationButton digit="÷" />
      <ButtonClick digit="1" />
      <ButtonClick digit="2" />
      <ButtonClick digit="3" />
      <OperationButton digit="*" />
      <ButtonClick digit="4" />
      <ButtonClick digit="5" />
      <ButtonClick digit="6" />
      <OperationButton digit="+" />
      <ButtonClick digit="7" />
      <ButtonClick digit="8" />
      <ButtonClick digit="9" />
      <OperationButton digit="-" />
      <ButtonClick digit="." />
      <ButtonClick digit="0" />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
