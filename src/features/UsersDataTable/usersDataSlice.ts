import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./getUsersData";

export interface UsersDataState {
  data: User[];
  status: "idle" | "loading" | "success" | "error";
}

const initialState: UsersDataState = {
  data: [],
  status: "idle",
};

export const usersDataSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
    initUsersDataFetching: (state) => {
      state.status = "loading";
    },

    fetchUsersData: (state, { payload: usersData }: PayloadAction<User[]>) => {
      state.data = usersData;
    },
    fetchUsersDataSuccess: (state) => {
      state.status = "success";
    },
    fetchUsersDataError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  initUsersDataFetching,
  fetchUsersData,
  fetchUsersDataSuccess,
  fetchUsersDataError,
} = usersDataSlice.actions;

export const selectUsersData = (state: { usersData: UsersDataState }) =>
  state.usersData.data;
export const selectUsersDataStatus = (state: { usersData: UsersDataState }) =>
  state.usersData.status;

export const selectUsersDataByQuery = (
  state: { usersData: UsersDataState },
  query: string | null,
) => {
  const usersData = selectUsersData(state);

  if (!query || query.trim() === "") {
    return usersData;
  }

  return usersData.filter(({ name }) =>
    name.toUpperCase().includes(query.trim().toUpperCase()),
  );
};

export default usersDataSlice.reducer;
