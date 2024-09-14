import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getUsersData } from "./getUsersData";
import {
  fetchUsersData,
  fetchUsersDataError,
  fetchUsersDataSuccess,
} from "./usersDataSlice";
import { User } from "./getUsersData";

function* fetchUsersDataHandler(): Generator {
  try {
    // @ts-ignore
    const usersData: User[] = yield call(getUsersData);
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
