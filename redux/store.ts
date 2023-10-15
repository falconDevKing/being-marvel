import { type AnyAction, combineReducers, configureStore, type Reducer } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import blogSlice from "./blogSlice";
import postSlice from "./postSlice";
import storage from "redux-persist/lib/storage";

import {
  // persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const kycPersistConfig = {
//   key: 'companyKyc',
//   storage,
//   whitelist: [],
// }

// const postPersistConfig = {
//   key: "post",
//   storage,
// };

const allReducers = combineReducers({
  auth: authSlice,
  post: postSlice,
  blog: blogSlice,

  // auth: persistReducer(authPersistConfig, authSlice),
});

const rootReducer: Reducer<RootState> = (state: RootState | undefined, action: AnyAction) => {
  // clears all states upon logout
  if (action.type === "auth/setLogout") {
    storage.removeItem("persist:root");
  }
  return allReducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof allReducers>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
