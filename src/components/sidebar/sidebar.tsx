import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faCheckDouble,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
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
              color: '#B3C02C',
              fontWeight: 'bold',
            }}
          >
            <FontAwesomeIcon icon={faUsers} /> Todos
          </NavLink>
        </S.ListItem>
        <S.ListItem>
          <NavLink
            to="/attended"
            exact
            activeStyle={{
              color: '#B3C02C',
              fontWeight: 'bold',
            }}
          >
            <FontAwesomeIcon icon={faCheckDouble} /> Atendidos
          </NavLink>
        </S.ListItem>
        <S.ListItem>
          <NavLink
            to="/trash"
            exact
            activeStyle={{
              color: '#B3C02C',
              fontWeight: 'bold',
            }}
          >
            <FontAwesomeIcon icon={faTrash} /> Lixeira
          </NavLink>
        </S.ListItem>
      </S.List>
    </S.Sidebar>
  );
};

export default Sidebar;
