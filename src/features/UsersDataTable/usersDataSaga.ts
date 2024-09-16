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
  FetchUsersDataAction,
  fetchUsersDataError,
  FetchUsersDataErrorAction,
} from "./usersDataSlice";
import { User } from "./getUsersData";

function* fetchUsersDataHandler(): Generator<
  | CallEffect<User[]>
  | PutEffect<FetchUsersDataAction | FetchUsersDataErrorAction>
  | ReturnType<typeof delay>,
  void,
  User[]
> {
  try {
    const usersData = yield call(getUsersData);
    yield delay(700);
    yield put(fetchUsersData(usersData));
  } catch (error) {
    console.error("Failed to fetch users data", error);
    yield put(fetchUsersDataError());
  }
}

export function* watchUsersData(): Generator {
  yield takeEvery("usersData/initUsersDataFetching", fetchUsersDataHandler);
}
