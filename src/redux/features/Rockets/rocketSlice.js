import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets', async () => {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const rocketSlice = createSlice({

    name: 'rockets',
    initialState,
    reducers: {
        bookRocket: (state, action) => {
            state.rockets = state.rockets.map((rocket) => {
                if(rocket.id === action.payload) 
                    return { ...rocket, reserved: true };  
                return rocket;
            });
        },
        canecelReservation: (state, action) => {
            state.rockets = state.rockets.map((rocket) => {
                if (rocket.id === action.payload)
                    return { ...rocket, reserved: false};
                return rocket;
            })
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRockets.pending, (state) => {
            state.status = 'Loading'
        })
        .addCase(fetchRockets.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.rockets = action.payload
        })
        .addCase(fetchRockets.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }

});

export const { bookRocket, canecelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
