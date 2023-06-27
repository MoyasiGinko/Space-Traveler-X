import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    test: 'Missions'
};

const missionsSlice = createSlice({
    name: 'missions',
    initialState,
    reducers: {

    }
});

export default missionsSlice.reducer;