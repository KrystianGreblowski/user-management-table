import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
  Container,
  Title,
  SearchContainer,
  SearchInput,
  TableContainer,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableData,
} from "./styled";
import {
  initUsersDataFetching,
  selectUsersDataByQuery,
  selectUsersDataStatus,
  UsersDataState,
} from "./usersDataSlice";
import Loader from "../../common/Loader";
import Error from "../../common/Error";
import searchQueryParamName from "./searchQueryParamName";
import { useQueryParameter } from "./useQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";

const UsersDataTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initUsersDataFetching());
  }, [dispatch]);

  const usersDataStatus = useSelector(selectUsersDataStatus);

  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  const usersData = useSelector((state: { usersData: UsersDataState }) =>
    selectUsersDataByQuery(state, query),
  );

  if (usersDataStatus === "loading") return <Loader />;

  if (usersDataStatus === "error") return <Error />;

  return (
    <Container>
      <Title>Users Information</Title>

      <SearchContainer>
        <SearchInput
          placeholder="Search Name"
          value={query || ""}
          onChange={onInputChange}
        />
      </SearchContainer>

      <TableContainer>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Username</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
          </TableRow>
        </TableHead>

        <TableBody>
          {usersData.map((user) => (
            <TableRow key={user.id}>
              <TableData>{user.name}</TableData>
              <TableData>{user.username}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.phone}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
};

export default UsersDataTable;
