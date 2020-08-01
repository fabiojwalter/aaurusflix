import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import { LogoImage, MenuWrapper } from './style';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="aAurusFlix" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
