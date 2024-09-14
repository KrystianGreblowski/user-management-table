import { all } from "redux-saga/effects";
import { watchUsersData } from "../features/UsersDataTable/usersDataSaga";

export default function* rootSaga() {
  yield all([watchUsersData()]);
}
