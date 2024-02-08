'use client'

import styled from 'styled-components';

export const Body = styled.body`
  background-color: #262135;
  padding: 0;
  margin: 0;
  *{
    font-weight: 200;
    color: #fcfcfc;
  }

  h1{
    font-size: max(8vmin, 40px);
  }
`;

export const MainContainer = styled.main`
    background-color: #262135;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    min-height: 100vh;

*{
  font-weight: 100;
  color: #fcfcfc;
}
`;