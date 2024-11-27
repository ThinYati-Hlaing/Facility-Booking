import localStorage from "redux-persist/lib/storage";

const persistSlices = ["auth"];

export const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: persistSlices,
};
