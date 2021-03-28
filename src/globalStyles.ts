import styled, { createGlobalStyle } from 'styled-components';
import { reset } from './assets/styles/_reset';

export const GlobalStyles = createGlobalStyle`
	${reset}
`;

export const Section = styled.section`
  max-width: 1366px;
  margin: 0 auto;
  background: #f9f9f9;
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 1191px;
  margin-top: 70px;
`;
