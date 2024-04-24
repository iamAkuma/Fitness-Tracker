import React from 'react'
import styled from 'styled-components'
import TextInput from "./TextInput";


const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;
const SignIn = () => {
  return (
    <Container>
      <div>
        <Title>
          Welcome to FitMan 👋
        </Title>
        <Span>Please login with your credentials!</Span>
      </div>
      <div>
        <TextInput label="Email Address" placeholder="Enter your Email Address" />
      </div>


    </Container>
  )
}

export default SignIn
