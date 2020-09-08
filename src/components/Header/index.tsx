import React from "react";
import logoLarge from '../../assets/logo-large.png';
import mlbMenu from '../../assets/mlb-menu.png';

import { Container, SearchBarRow, LinksRow, InputBox, SearchIcon, LocationIcon } from "./styles";

const Header: React.FC = () => {
  return (
  <Container>
    <SearchBarRow>
      <img src={logoLarge} alt="logo" className='logo'/>
      <InputBox>
        <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
        <button type="button">
          <SearchIcon />
        </button>
      </InputBox>
      <img src={mlbMenu} alt="logo-menu" className="header-link"/>
    </SearchBarRow>

  </Container>);
};

export default Header;
