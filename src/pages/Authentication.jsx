import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
  `;

const Left = styled.div`
 flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Right = styled.div`
 flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;

const Authentication = () => {
    return (
        <div>
            <Container>
                <Left>
                    <Logo />
                    <Image />
                </Left>
                <Right>R</Right>
            </Container>
        </div>
    )
}

export default Authentication
