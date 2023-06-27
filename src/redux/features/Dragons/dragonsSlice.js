import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v4/dragons');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  dragons: [],
  status: 'idle',
  error: null,
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dragonsSlice.reducer;
