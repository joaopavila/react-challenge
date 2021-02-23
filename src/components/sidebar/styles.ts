import styled from 'styled-components';

export const Sidebar = styled.aside`
  width: 175px;
  height: 100vh;
  background: #fff;
  box-shadow: 5px 0px 10px -5px #ccc;
  position: fixed;
  padding-top: 90px;
`;

export const List = styled.ul`
  font-family: Helvetica;
  font-size: 18px;
  line-height: initial;
  color: #9e9e9e;
  font-weight: 300;
`;

export const ListItem = styled.li`
  margin-top: 7px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;
