import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
    value: string;
}

const initialState: InputState = {
    value: '',
};

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setInputValue } = inputSlice.actions;

export const selectInputValue = (state: { input: InputState }) => state.input.value;

export default inputSlice.reducer;
