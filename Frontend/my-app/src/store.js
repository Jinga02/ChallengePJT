// store.js

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage를 사용하려면 이렇게 임포트

import rootReducer from "./rootReducer"; // rootReducer를 import 하도록 수정

const persistConfig = {
  key: "root",
  storage, //local Storage에 저장
  whitelist: [
    "users",
    "challenges",
    "myChallenges",
    "onGoingMyChallengeSlice",
    "completeMyChallenges",
  ], //auth Reducer만 저장
};
// persistReducer 함수를 사용하여 persistConfig를 적용한 새로운 rootReducer를 생성
// 이렇게 생성된 rootReducer는 상태가 영구 저장되도록 설정
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    // serializableCheck를 false로 설정하여 Redux store의 액션과 상태의 직렬화 여부를 체크하지 않도록 함
    // 이 설정은 개발 환경에서 시리얼라이징 관련 경고 메시지를 무시하기 위함
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
