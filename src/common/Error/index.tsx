import { Wrapper, ErrorImage, MainInfo, ExtraInfo } from "./styled";

const Error = () => {
  return (
    <Wrapper>
      <ErrorImage />
      <MainInfo>Ooops! Something went wrong...</MainInfo>
      <ExtraInfo>Please check your network connection and try again</ExtraInfo>
    </Wrapper>
  );
};

export default Error;
