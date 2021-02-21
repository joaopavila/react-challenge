import React from 'react';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header className="header">
      <S.HeaderContainer className="header-container">
        <img src="https://via.placeholder.com/75x40" alt="Logo" />
        <S.Input type="text" className="search" placeholder="Buscar" />
        <S.User className="login"></S.User>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
