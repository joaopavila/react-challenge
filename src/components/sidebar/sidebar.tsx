import { NavLink } from 'react-router-dom';

import * as S from './styles';

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.List>
        <S.ListItem>
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontWeight: 'bold',
            }}
          >
            Todos
          </NavLink>
        </S.ListItem>
        <S.ListItem>
          <NavLink
            to="/attended"
            exact
            activeStyle={{
              fontWeight: 'bold',
            }}
          >
            Atendidos
          </NavLink>
        </S.ListItem>
        <S.ListItem>
          <NavLink
            to="/trash"
            exact
            activeStyle={{
              fontWeight: 'bold',
            }}
          >
            Lixeira
          </NavLink>
        </S.ListItem>
      </S.List>
    </S.Sidebar>
  );
};

export default Sidebar;
