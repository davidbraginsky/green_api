import { EMPTY_STRING } from "@/utils/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idInstance: EMPTY_STRING,
  apiTokenInstance: EMPTY_STRING,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_DATA_SUBMITTED: (state, action) => {
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;
    },
  },
});

export default userSlice.reducer;
export const { USER_DATA_SUBMITTED } = userSlice.actions;
