import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

import usersDataSlice from "../features/UsersDataTable/usersDataSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    usersData: usersDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
