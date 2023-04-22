import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: '',
  number: '',
};

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    setResult(state, action) {
      if (state.result === '0' && action.payload === '0') {
        return state;
      }
      if (state.result.includes('.') && action.payload === '.') {
        return state;
      }
      state.result += action.payload;
    },
    setClear(state, action) {
      state.result = '';
    },
    setOperation(state, action) {
      const plus = action.payload === '+';
      const minus = action.payload === '-';
      const multiplication = action.payload === '*';
      const division = action.payload === '÷';

      if (plus && state.result !== '') {
        state.number = Number(state.number) + Number(state.result);
        state.operation = '';
      } else if (minus && state.result !== '' && state.number !== '') {
        state.number = Number(state.number) - Number(state.result);
        state.operation = '';
      } else if (multiplication && state.result !== '' && state.number !== '') {
        state.number = Number(state.number) * Number(state.result);
        state.operation = '';
      } else if (division && state.result !== '' && state.number !== '') {
        state.number = Number(state.number) / Number(state.result);
        state.operation = '';
      } else if (state.result !== '') {
        state.number = state.result;
      }
      state.result = '';
    },
    setDel(state, action) {
      state.result = '';
      state.number = '';
    },
  },
});

export const { setResult, setClear, setOperation, setDel } = calculateSlice.actions;

export default calculateSlice.reducer;
