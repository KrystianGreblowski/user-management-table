import { useUsersData } from "./useUsersData";
import {
  TableContainer,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableData,
} from "./styled";

const UsersDataTable = () => {
  const { usersData } = useUsersData();

  console.log(usersData);

  return (
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
  );
};

export default UsersDataTable;
