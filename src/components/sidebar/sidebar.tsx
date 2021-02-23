import * as S from './styles';

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.List>
        <S.ListItem>Todos</S.ListItem>
        <S.ListItem>Atendidos</S.ListItem>
        <S.ListItem>Lixeira</S.ListItem>
      </S.List>
    </S.Sidebar>
  );
};

export default Sidebar;
