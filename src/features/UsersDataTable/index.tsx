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
import { useQueryParameter } from "./useQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";

const UsersDataTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initUsersDataFetching());
  }, [dispatch]);

  const usersDataStatus = useSelector(selectUsersDataStatus);

  const nameQuery = useQueryParameter("search-by-name");
  const usernameQuery = useQueryParameter("search-by-username");
  const emailQuery = useQueryParameter("search-by-email");
  const phoneQuery = useQueryParameter("search-by-phone");

  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange =
    (key: string) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      replaceQueryParameter({
        key,
        value: target.value.trim() !== "" ? target.value : undefined,
      });
    };

  const usersData = useSelector((state: { usersData: UsersDataState }) =>
    selectUsersDataByQuery(state, {
      nameQuery,
      usernameQuery,
      emailQuery,
      phoneQuery,
    }),
  );

  if (usersDataStatus === "loading") return <Loader />;

  if (usersDataStatus === "error") return <Error />;

  return (
    <Container>
      <Title>Users Information</Title>

      <SearchContainer>
        <SearchInput
          placeholder="Search by name"
          value={nameQuery || ""}
          onChange={onInputChange("search-by-name")}
        />
        <SearchInput
          placeholder="Search by username"
          value={usernameQuery || ""}
          onChange={onInputChange("search-by-username")}
        />
        <SearchInput
          placeholder="Search by email"
          value={emailQuery || ""}
          onChange={onInputChange("search-by-email")}
        />
        <SearchInput
          placeholder="Search by phone"
          value={phoneQuery || ""}
          onChange={onInputChange("search-by-phone")}
        />
      </SearchContainer>

      <TableContainer>
        <TableHead>
          <TableRow $noResults={false}>
            <TableHeader>Name</TableHeader>
            <TableHeader>Username</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
          </TableRow>
        </TableHead>

        {usersData.length > 0 ? (
          <TableBody>
            {usersData.map((user) => (
              <TableRow key={user.id} $noResults={false}>
                <TableData>{user.name}</TableData>
                <TableData>{user.username}</TableData>
                <TableData>{user.email}</TableData>
                <TableData>{user.phone}</TableData>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow $noResults={true}>
              <TableData>No results</TableData>
            </TableRow>
          </TableBody>
        )}
      </TableContainer>
    </Container>
  );
};

export default UsersDataTable;
