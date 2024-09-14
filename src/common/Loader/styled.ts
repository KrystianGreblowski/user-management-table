import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;

  @media (max-width: 767px) {
    margin-top: 150px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
}
  to {
    transform: rotate(360deg);
}
`;

export const LoadingAnimation = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;
  width: 64px;
  height: 64px;

  @media (max-width: 767px) {
    width: 48px;
    height: 48px;
  }
`;
