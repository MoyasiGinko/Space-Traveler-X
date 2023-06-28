import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions', async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    populateMissions: (state, action) => {
      console.log("populateMissions reducer invoked with action: ", action);
      return { ...state, missions: action.payload };
    },
    joinMission: (state, action) => {
      console.log("joinMission reducer invoked with action: ", action);
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        console.log("Mission to be updated: ", mission);
        return {
          ...mission,
          reserved: true,
        };
      });
      console.log("New state after joinMission: ", newState);
      return { ...state, missions: newState };
    },
    leaveMission: (state, action) => {
      console.log("leaveMission reducer invoked with action: ", action);
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        console.log("Mission to be updated: ", mission);
        return {
          ...mission,
          reserved: false,
        };
      });
      console.log("New state after leaveMission: ", newState);
      return { ...state, missions: newState };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { joinMission, populateMissions, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
