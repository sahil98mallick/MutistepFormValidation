import formSlice from "./formSlice";
import globalSlice from "./global.slice";
import userSlice from "./userSlice";

const rootReducer = {
  userSlice,
  globalSlice,
  formSlice
};

export default rootReducer;
