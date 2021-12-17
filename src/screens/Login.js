import styled from "styled-components";

const Title = styled.h1`
  color: blue;
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Container = styled.div`
  background-color: tomato;
`;

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
    </Container>
  );
};

export default Login;
