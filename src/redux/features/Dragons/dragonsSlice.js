import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    test: 'Dragons'
};

const dragonsSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {

    }
});

export default dragonsSlice.reducer;