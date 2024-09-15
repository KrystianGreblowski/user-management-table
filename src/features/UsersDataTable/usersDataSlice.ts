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
  queries: {
    nameQuery: string | null;
    usernameQuery: string | null;
    emailQuery: string | null;
    phoneQuery: string | null;
  },
) => {
  const usersData = selectUsersData(state);

  return usersData.filter((user) => {
    const name =
      !queries.nameQuery ||
      user.name.toUpperCase().includes(queries.nameQuery.trim().toUpperCase());

    const username =
      !queries.usernameQuery ||
      user.username
        .toUpperCase()
        .includes(queries.usernameQuery.trim().toUpperCase());

    const email =
      !queries.emailQuery ||
      user.email
        .toUpperCase()
        .includes(queries.emailQuery.trim().toUpperCase());

    const phone =
      !queries.phoneQuery ||
      user.phone
        .toUpperCase()
        .includes(queries.phoneQuery.trim().toUpperCase());

    return name && username && email && phone;
  });
};

export default usersDataSlice.reducer;
