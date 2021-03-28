import styled from 'styled-components';

export const User = styled.li`
  width: calc(100% - 50px);
  height: 70px;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Infos = styled.p`
  margin-right: 10px;
  font-size: 18px;
`;

export const UserName = styled(Infos)`
  color: #2c3e51;
`;

export const Actions = styled.div`
  display: flex;
  width: 75px;
  justify-content: space-between;
  align-items: center;

  p {
    cursor: pointer;

    &:hover {
      color: #b3c02c;
    }
  }
`;
