import { LoginAction } from '../actions/providerSourceActions';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'store';

interface ProviderSourceState {
    username: string;
    password: string;
    activeRoute: string;
    progressBarState: string;
}

const initialState: ProviderSourceState = {
    username: '',
    password: '',
    activeRoute: '',
    progressBarState: 'testerss---'
};

const ProviderAppSlice = createSlice({
    name: 'providerSourceReducer',
    initialState,
    reducers: {
        setLoginCredentials: (state, action: PayloadAction<LoginAction>) => {
            const { username, password } = action.payload;
            (state.username = username), (state.password = password);
        },
        setActiveRoute: (state, action) => {
            state.activeRoute = action.payload;
        },
        setProgressBarState: (state, action) => {
            state.progressBarState = action.payload;
        }
    }
});

export const selectProviderSourceReducer = (state: RootState) => state.providerSourceReducer;
export const { setLoginCredentials, setActiveRoute, setProgressBarState } = ProviderAppSlice.actions;

export default ProviderAppSlice.reducer;
