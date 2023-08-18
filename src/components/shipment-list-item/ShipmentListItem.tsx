import { ShipmentData } from '@/types/types';
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ShipmentListItem.styles';

interface ShipmentListItemProps {
  shipmentData: ShipmentData[];
  selectedShipment: ShipmentData | null;
  setSelectedShipment: React.Dispatch<
    React.SetStateAction<ShipmentData | null>
  >;
  isShipmentList: boolean;
  setIsShipmentList: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShipmentListItem = ({
  shipmentData,
  selectedShipment,
  setSelectedShipment,
  isShipmentList,
  setIsShipmentList,
}: ShipmentListItemProps) => {
  return (
    <S.ShipmentListItemsWrapper
      className={`shipment-list__item ${isShipmentList && 'hide'}`}
    >
      <S.ShipmentListTitle className="shipment-list__title">
        Shipment List
      </S.ShipmentListTitle>
      {shipmentData.map((shipment) => (
        <Link
          className="shipment-list__link link"
          to={`/shipments/${shipment.name}`}
          key={shipment.id}
        >
          <S.ShipmentListItem
            className={`shipment-list__item ${
              selectedShipment === shipment && 'clicked'
            }`}
            onClick={() => {
              setSelectedShipment(shipment);
              setIsShipmentList(true);
            }}
          >
            {shipment.name}
          </S.ShipmentListItem>
        </Link>
      ))}
    </S.ShipmentListItemsWrapper>
  );
};

export default ShipmentListItem;
