import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Container,
  Title,
  TableContainer,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableData,
} from "./styled";
import {
  initUsersDataFetching,
  selectUsersData,
  selectUsersDataStatus,
} from "./usersDataSlice";
import Loader from "../../common/Loader";
import Error from "../../common/Error";

const UsersDataTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initUsersDataFetching());
  }, [dispatch]);

  const usersData = useSelector(selectUsersData);
  const usersDataStatus = useSelector(selectUsersDataStatus);

  if (usersDataStatus === "loading") return <Loader />;

  if (usersDataStatus === "error") return <Error />;

  return (
    <Container>
      <Title>Users Information</Title>

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
