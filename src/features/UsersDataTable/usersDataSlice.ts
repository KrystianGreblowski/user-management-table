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
      state.status = "success";
    },
    fetchUsersDataError: (state) => {
      state.status = "error";
    },
  },
});

export const { initUsersDataFetching, fetchUsersData, fetchUsersDataError } =
  usersDataSlice.actions;

export type FetchUsersDataAction = PayloadAction<User[]>;
export type FetchUsersDataErrorAction = {
  type: typeof fetchUsersDataError.type;
};

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

  const nameQuery = queries.nameQuery?.trim().toUpperCase() || null;
  const usernameQuery = queries.usernameQuery?.trim().toUpperCase() || null;
  const emailQuery = queries.emailQuery?.trim().toUpperCase() || null;
  const phoneQuery = queries.phoneQuery?.trim().toUpperCase() || null;

  return usersData.filter((user) => {
    const name = !nameQuery || user.name.toUpperCase().includes(nameQuery);
    const username =
      !usernameQuery || user.username.toUpperCase().includes(usernameQuery);
    const email = !emailQuery || user.email.toUpperCase().includes(emailQuery);
    const phone = !phoneQuery || user.phone.toUpperCase().includes(phoneQuery);

    return name && username && email && phone;
  });
};

export default usersDataSlice.reducer;
