import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets', async () => {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const data = await response.json();
    const rockets = [];
    data.forEach((item) => {
      const rocket = {
        id: item.id,
        name: item.name,
        photo: item.flickr_images[0],
        description: item.description,
      };
      if (localStorage.getItem(`${item.id}`)) {
        rocket.reserved = true;
      }
      rockets.push(rocket);
    });
    return rockets;
  },
);

export const bookRocket = createAsyncThunk('rockets/reserveRocket', async (rocketId) => {
  localStorage.setItem(`${rocketId}`, 'true');
  return rocketId;
});

export const cancelReservation = createAsyncThunk('rockets/cancelReservation', async (rocketId) => {
  localStorage.removeItem(`${rocketId}`);
  return rocketId;
});

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const rocketSlice = createSlice({

  name: 'rockets',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(bookRocket.fulfilled, (state, action) => {
        state.rockets = state.rockets.map((rocket) => (rocket.id === action.payload
          ? { ...rocket, reserved: true } : rocket));
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        state.rockets = state.rockets.map((rocket) => (rocket.id === action.payload
          ? { ...rocket, reserved: false } : rocket));
      });
  },

});

export default rocketSlice.reducer;
