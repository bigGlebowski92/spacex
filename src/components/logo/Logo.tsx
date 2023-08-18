import React from 'react';
import { LogoIcon } from '../icons/LogoIcon';
import * as S from './Logo.styles';

const Logo = () => {
  return (
    <S.LogoWrapper className="logo-wrapper">
      <LogoIcon />
    </S.LogoWrapper>
  );
};

export default Logo;
