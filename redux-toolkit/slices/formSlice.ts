import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
}

const initialState: FormData = {
    firstName: '',
    lastName: '',
    email: '',
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<FormData>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { setFormData } = formSlice.actions;

export const selectFormData = (state: RootState) => state.formSlice;

export default formSlice.reducer;