import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'rockets/fetchMissions', async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const missionSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default missionSlice.reducer;
