import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v4/dragons');
    const data = await response.json();
    return data;
  }
);

export const reserveDragon = createAsyncThunk(
  'dragons/reserveDragon',
  async (dragonId) => {
    localStorage.setItem(`reserved_${dragonId}`, 'true');
    return dragonId;
  }
);

export const cancelReservation = createAsyncThunk(
  'dragons/cancelReservation',
  async (dragonId) => {
    localStorage.removeItem(`reserved_${dragonId}`);
    return dragonId;
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
      })
      .addCase(reserveDragon.fulfilled, (state, action) => {
        const dragonId = action.payload;
        state.dragons = state.dragons.map((dragon) =>
          dragon.id === dragonId ? { ...dragon, reserved: true } : dragon
        );
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        const dragonId = action.payload;
        state.dragons = state.dragons.map((dragon) =>
          dragon.id === dragonId ? { ...dragon, reserved: false } : dragon
        );
      });
  },
});

export default dragonsSlice.reducer;
