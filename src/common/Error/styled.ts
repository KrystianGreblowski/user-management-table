import styled from "styled-components";
import { ReactComponent as Error } from "./error.svg";

export const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 200px 0;

  @media (max-width: 767px) {
    margin: 150px 0;
  }
`;

export const ErrorImage = styled(Error)`
  width: 48px;
  height: 48px;

  @media (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`;

export const MainInfo = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 4px 0;

  @media (max-width: 767px) {
    font-size: 16px;
    margin: 0;
  }
`;

export const ExtraInfo = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 400;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
