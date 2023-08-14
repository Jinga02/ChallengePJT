import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slice/UserSlice";
import {
  challengeSlice,
  myChallengeSlice,
<<<<<<< HEAD
  onGoingMyChallengeSlice,
  completeMyChallengeSlice,
  plannedMyChallengeSlice,
=======
  onGoingChallengeSlice,
  completeMyChallengeSlice,
>>>>>>> 9ef782af2f69c513080be5cb10ef258c41b485e6
} from "./slice/ChallengeSlice";

export const rootReducer = combineReducers({
  users: userSlice.reducer,
  challenges: challengeSlice.reducer,
  myChallenges: myChallengeSlice.reducer,
<<<<<<< HEAD
  onGoingMyChallenges: onGoingMyChallengeSlice.reducer,
  completeMyChallenges: completeMyChallengeSlice.reducer,
  plannedMyChallenges: plannedMyChallengeSlice.reducer,
=======
  onGoingChallenges: onGoingChallengeSlice.reducer,
  completeMyChallenges: completeMyChallengeSlice.reducer,
>>>>>>> 9ef782af2f69c513080be5cb10ef258c41b485e6
});

export default rootReducer;
