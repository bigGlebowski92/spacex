import React from 'react';
import { CloseIcon } from '../icons/CloseIcon';
import { SettingsIcon } from '../icons/SettingsIcon';
import * as S from './Header.styles';

interface HeaderProps {
  isShipmentList: boolean;
  setIsShipmentList: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isShipmentList, setIsShipmentList }: HeaderProps) => {
  return (
    <S.HeaderWrapper>
      {isShipmentList ? (
        <CloseIcon onClick={() => setIsShipmentList(false)} />
      ) : (
        <SettingsIcon onClick={() => setIsShipmentList(true)} />
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
