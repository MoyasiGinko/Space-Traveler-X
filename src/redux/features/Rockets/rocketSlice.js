import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    test: 'Rockets'
};

const rocketSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {

    }
});

export default rocketSlice.reducer;