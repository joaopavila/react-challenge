import styled from 'styled-components';
import { colors } from '../../assets/styles/_variables';

import { Search } from '@styled-icons/boxicons-regular/Search';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';

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

export const BoxSearch = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 755px;
  height: 40px;
  border-radius: 50px;
  padding: 0 20px 0 45px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const User = styled(UserCircle)`
  width: 35px;
  color: #fff;
`;

export const IconSearch = styled(Search)`
  width: 30px;
  position: absolute;
  top: 9px;
  left: 13px;
  color: #b3c02c;
`;
