import styled from 'styled-components';
import { colors } from '../../assets/styles/_variables';

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background: ${colors.header};
  display: flex;
  box-shadow: 0px 0px 15px #888888;
`;

export const HeaderContainer = styled.div`
  width: 1366px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 820px;
  height: 40px;
  border-radius: 50px;
  padding: 0 20px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const User = styled.div`
  width: 35px;
  height: 35px;
  background: #ccc;
`;
