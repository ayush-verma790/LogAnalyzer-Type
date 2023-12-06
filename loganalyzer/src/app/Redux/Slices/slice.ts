                                                                                                                                                         
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
  input: string;
  queryHistory: string[];
  responseHistory: string[];
  loading: boolean; 
}

const initialState: RootState = {
  input: "",
  queryHistory: [],
  responseHistory: [],
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    addQueryHistory: (state, action: PayloadAction<string>) => {
      state.queryHistory.push(action.payload);
    },
    addResponseHistory: (state, action: PayloadAction<string>) => {
      state.responseHistory.push(action.payload);
    },
  },
});

export const { setInput, setLoading, addQueryHistory, addResponseHistory } = appSlice.actions;
export default appSlice.reducer;
