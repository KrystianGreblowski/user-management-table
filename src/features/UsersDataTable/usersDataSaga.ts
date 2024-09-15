import {
  call,
  delay,
  put,
  takeEvery,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { getUsersData } from "./getUsersData";
import {
  fetchUsersData,
  fetchUsersDataError,
  fetchUsersDataSuccess,
} from "./usersDataSlice";
import { User } from "./getUsersData";

function* fetchUsersDataHandler(): Generator<
  CallEffect | PutEffect | ReturnType<typeof delay>,
  void,
  User[]
> {
  try {
    const usersData = yield call(getUsersData);
    yield put(fetchUsersData(usersData));
    yield delay(700);
    yield put(fetchUsersDataSuccess());
  } catch (error) {
    yield put(fetchUsersDataError());
  }
}

export function* watchUsersData(): Generator {
  yield takeEvery("usersData/initUsersDataFetching", fetchUsersDataHandler);
}
