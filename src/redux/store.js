import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/Rockets/rocketSlice';
import missionsReducer from './features/Missions/missionsSlice';
import dragonsReducer from './features/Dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
