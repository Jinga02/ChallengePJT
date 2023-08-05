import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slice/UserSlice";
import { challengeSlice } from "./slice/ChallengeSlice";

export const rootReducer = combineReducers({
  users: userSlice.reducer,
  challenges: challengeSlice.reducer,
});

export default rootReducer;
