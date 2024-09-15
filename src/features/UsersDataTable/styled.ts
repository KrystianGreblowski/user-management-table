import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 8px;
  justify-items: center;
  margin: 18px 0;

  @media (max-width: 767px) {
    margin: 12px auto;
  }

  @media (max-width: 480px) {
    margin: 8px auto;
  }
`;
export const Title = styled.h1`
  font-size: 44px;
  font-weight: 700;
  margin: 0 0 18px 0;

  @media (max-width: 767px) {
    font-size: 28px;
    margin: 0 0 12px 0;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin: 0 0 8px 0;
  }
`;

export const TableContainer = styled.table``;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-gap: 3px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 180px);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(4, 110px);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 80px);
    grid-gap: 2px;
  }
`;

export const TableHeader = styled.th`
  background-color: teal;
  color: white;
  font-size: 24px;
  font-weight: 700;
  padding: 12px;
  box-shadow: 1px 1px 1px #3a3a3a4d;
  border-radius: 3px;
  margin-bottom: 3px;
  align-content: center;

  @media (max-width: 767px) {
    font-size: 15px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 4px;
    margin-bottom: 2px;
  }
`;

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-gap: 3px;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 180px);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(4, 110px);
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 80px);
    grid-gap: 2px;
    margin-bottom: 4px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: white;
  color: black;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  box-shadow: 1px 1px 1px #3a3a3a4d;
  border-radius: 3px;

  @media (max-width: 767px) {
    font-size: 10px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    padding: 4px;
  }
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  background-color: white;
  color: black;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  box-shadow: 1px 1px 1px #3a3a3a4d;
  border-radius: 3px;
  margin-bottom: 3px;
  align-content: center;

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px;
    margin-bottom: 2px;
  }
`;
