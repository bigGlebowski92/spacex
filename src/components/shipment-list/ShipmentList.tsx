import React, { useState } from 'react';

import { Autocomplete } from '@mantine/core';
import { ShipmentData, ShipmentListProps } from '../../types/types';
import ShipmentDetails from '../shipment-details/ShipmentDetails';
import * as S from './ShipmentList.styles';
import Header from '../header/Header';
import Logo from '../logo/Logo';
import ShipmentListItem from '../shipment-list-item/ShipmentListItem';

const ShipmentList = ({ shipmentData }: ShipmentListProps) => {
  const [selectedShipment, setSelectedShipment] = useState<ShipmentData | null>(
    null
  );
  const [isShipmentList, setIsShipmentList] = useState<boolean>(true);

  const handleChangeAutocomplete = (data: string) => {
    const filteredShipments = shipmentData.find(
      (shipment) => shipment.name.toLowerCase() === data.toLowerCase()
    );
    if (filteredShipments) setSelectedShipment(filteredShipments);
  };

  const shipmentDataForAutocomplete = shipmentData.map((shipment) => ({
    ...shipment,
    value: shipment.name,
  }));

  return (
    <S.ShipmentListWrapper
      className={`shipment-list ${isShipmentList && 'isShipmentList'}`}
    >
      <Logo />
      <Header
        isShipmentList={isShipmentList}
        setIsShipmentList={setIsShipmentList}
      />

      <S.SearchWrapper
        className={`shipment-list__search ${
          isShipmentList && 'isShipmentList'
        }`}
      >
        <Autocomplete
          placeholder="Search"
          onChange={handleChangeAutocomplete}
          data={shipmentDataForAutocomplete}
          limit={10}
          transitionProps={{
            transition: 'pop-top-left',
            duration: 80,
            timingFunction: 'ease',
          }}
        />
      </S.SearchWrapper>

      <ShipmentListItem
        shipmentData={shipmentData}
        selectedShipment={selectedShipment}
        setSelectedShipment={setSelectedShipment}
        isShipmentList={isShipmentList}
        setIsShipmentList={setIsShipmentList}
      />
      {selectedShipment && (
        <ShipmentDetails
          selectedShipment={selectedShipment}
          isShipmentList={isShipmentList}
        />
      )}
    </S.ShipmentListWrapper>
  );
};

export default ShipmentList;
