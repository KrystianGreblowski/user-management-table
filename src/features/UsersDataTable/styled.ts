import styled from "styled-components";

export const TableContainer = styled.table`
  margin: 64px auto;
  padding: 0 8px;

  @media (max-width: 767px) {
    margin: 32px auto;
  }
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  background-color: teal;
  color: white;
  font-size: 24px;
  font-weight: 700;
  padding: 12px;
  box-shadow: 1px 1px 1px #3a3a3a4d;
  border-radius: 3px;

  @media (max-width: 767px) {
    font-size: 15px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 4px;
  }
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  max-width: 300px;
  background-color: white;
  color: black;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  box-shadow: 1px 1px 1px #3a3a3a4d;
  border-radius: 3px;

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px;
  }
`;
