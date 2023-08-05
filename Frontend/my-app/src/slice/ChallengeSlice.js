import { createSlice } from "@reduxjs/toolkit";

export const challengeSlice = createSlice({
  name: "challenges",
  initialState: null,
  reducers: {
    setChallenge: (state, action) => {
      return action.payload;
    },
  },
});

export const { setChallenge } = challengeSlice.actions;

// setChallenge({
//   category: res.data.data.category,
//   cert: res.data.data.cert,
//   classification: res.data.data.classification,
//   createUserId: res.data.data.createUserId,
//   curPeople: res.data.data.curPeople,
//   endDate: res.data.data.endDate,
//   endTime: res.data.data.endTime,
//   id: res.data.data.id,
//   imgPath: res.data.data.imgPath,
//   info: res.data.data.info,
//   money: res.data.data.money,
//   name: res.data.data.name,
//   people: res.data.data.people,
//   startDate: res.data.data.startDate,
//   startTime: res.data.data.startTime,
//   userList: res.data.data.userList,
// });
// setChallenge(res.data.data)
